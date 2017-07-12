const	https = require("https"),
	mongo = require("./mongo-module.js");

module.exports.PhotoTreatment = PhotoTreatment;
function PhotoTreatment(seenFaces) {
	return (req, res) => {
		console.log("Photo received");
		var d = new Date();
		var data = '';
		var parsedBody = '';
	    const postData = '{"url": "https://jenablopstore.blob.core.windows.net/image/photo.jpg?t=' + d.getTime() + '"}';
		var postOptions = {
			hostname: "westeurope.api.cognitive.microsoft.com",
			path: "/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=age,gender,emotion",
			headers: {
				'Content-Type': 'application/json',
				'Content-Length': Buffer.byteLength(postData),
				'Ocp-Apim-Subscription-Key': "e1d2c051053940d9973836e4a5dd3f66"
			},
			method: "POST",
		};
	
		const reqH = https.request(postOptions, (resH) => {
			resH.setEncoding('utf8');
			resH.on('data', (chunk) => {
				data += chunk;
			});
			resH.on('end', () => {
				console.log(data);
				parsedBody = JSON.parse(data);
				for (var a = 0; a < parsedBody.length; a++) {
					if (!isAlreadySeen(parsedBody[a].faceId, seenFaces)) {
						var document = {};
						document.timestamp = d.getTime();
						document.faceAttributes = parsedBody[a].faceAttributes;
						seenFaces[d.getTime()] = parsedBody[a].faceId;
						mongo.mongo_insert_documents(document);
						console.log('Face added to database');
					}
				}
				res.json(parsedBody);
			});
		});

		reqH.on('error', (e) => {
			console.error(`problem with request: ${e.message}`);
		});

		reqH.write(postData);
		reqH.end();
	};
}

function isAlreadySeen(faceId, seenFaces) {
	var d = new Date();
	for (var a in seenFaces) {
		if (a + 600000 < d.getTime) {
			seenFaces.splice(a, 1);
		}
		if (seenFaces[a] == faceId) {
			return true;
		}
	}
	return false;
}
