const	MongoClient = require('mongodb').MongoClient,
		connection_info = {
			"db_user" : "root",
			"db_pass" : "RGJzKCTaJ98B",
			"db_ip" : "40.68.194.122",
			"db_port" : "27017"
		};

var	url = "mongodb://" + connection_info.db_user + ":" + connection_info.db_pass + "@" + connection_info.db_ip + ":" + connection_info.db_port,
	info = {},
	totalAge = 0,
	todayAge = 0,
	totalEmotion = {
      "anger": 0,
      "contempt": 0,
      "disgust": 0,
      "fear": 0,
      "happiness": 0,
      "neutral": 0,
      "sadness": 0,
      "surprise": 0
    },
    todayEmotion = {
      "anger": 0,
      "contempt": 0,
      "disgust": 0,
      "fear": 0,
      "happiness": 0,
      "neutral": 0,
      "sadness": 0,
      "surprise": 0
    };

module.exports.mongo_connect = ConnectToDB;
function ConnectToDB(req, res) {
	MongoClient.connect(url, (err, db) => {
		if (err) {
			console.log("ERROR ON CONNECT TO DB : connection failed " + err);
		} else {
			console.log("Connected correctly to server");
		}
	});
}

module.exports.mongo_insert_documents = InsertDocuments;
function InsertDocuments(document) {
	MongoClient.connect(url, (err, db) => {
		if (err) {
			console.log("ERROR ON INSERT DOCUMENT : connection failed " + err);
		} else {
			console.log("Connected correctly to server");

			var collection = db.collection('face_api_results');
			collection.insertOne(document, (err, result) => {
				if (err) {
					console.log("ERROR ON INSERT DOCUMENT : " + err);
				} else {
					console.log("Inserted 1 document into the document collection");
					CloseDBConnection(db);
				}
			});
		}
	});
}

module.exports.mongo_get_info = GetInfo;
function GetInfo(req, res) {
	MongoClient.connect(url, (err, db) => {
		if (err) {
			console.log("ERROR ON GET INFO : connection failed " + err);
		} else {
			console.log("Connected correctly to server");

			var collection = db.collection('face_api_results');
			collection.find({}).toArray(function(err, docs) {
				if (err) {
					console.log("ERROR ON GET INFO : " + err);
				} else {
					InitialiseInfo();
					console.log("Found the following records");
					for (var a = 0; a < docs.length; a++) {
						ClassifyInfo(docs[a]);
					}
					res.json(info);
				}
				CloseDBConnection(db);
			});
		}
	});
}

function ClassifyInfo(doc) {
	var today = new Date();
	var docDate = new Date(doc.timestamp);
	info.count.total += 1;
	if (doc.faceAttributes.gender == "male") {
		info.gender.total.male += 1;
	} else {
		info.gender.total.female += 1;
	}
	totalAge += doc.faceAttributes.age;
	info.age.total = totalAge / info.count.total;
	if (today.toDateString() == docDate.toDateString()) {
		info.count.today += 1;
		if (doc.faceAttributes.gender == "male") {
			info.gender.today.male += 1;
		} else {
			info.gender.today.female += 1;
		}
		todayAge += doc.faceAttributes.age;
		info.age.today = todayAge / info.count.today;
	}
	ClassifyEmotion(doc.faceAttributes.emotion, today.toDateString() == docDate.toDateString());
}

function ClassifyEmotion(emotion, isToday) {
	totalEmotion.anger += emotion.anger;
	totalEmotion.contempt += emotion.contempt;
	totalEmotion.disgust += emotion.disgust;
	totalEmotion.fear += emotion.fear;
	totalEmotion.happiness += emotion.happiness;
	totalEmotion.neutral += emotion.neutral;
	totalEmotion.sadness += emotion.sadness;
	totalEmotion.surprise += emotion.surprise;
	
	info.emotion.total.anger = totalEmotion.anger / info.count.total;
	info.emotion.total.contempt = totalEmotion.contempt / info.count.total;
	info.emotion.total.disgust = totalEmotion.disgust / info.count.total;
	info.emotion.total.fear = totalEmotion.fear / info.count.total;
	info.emotion.total.happiness = totalEmotion.happiness / info.count.total;
	info.emotion.total.neutral = totalEmotion.neutral / info.count.total;
	info.emotion.total.sadness = totalEmotion.sadness / info.count.total;
	info.emotion.total.surprise = totalEmotion.surprise / info.count.total;

	if (isToday) {
		todayEmotion.anger += emotion.anger;
		todayEmotion.contempt += emotion.contempt;
		todayEmotion.disgust += emotion.disgust;
		todayEmotion.fear += emotion.fear;
		todayEmotion.happiness += emotion.happiness;
		todayEmotion.neutral += emotion.neutral;
		todayEmotion.sadness += emotion.sadness;
		todayEmotion.surprise += emotion.surprise;
		
		info.emotion.today.anger = todayEmotion.anger / info.count.today;
		info.emotion.today.contempt = todayEmotion.contempt / info.count.today;
		info.emotion.today.disgust = todayEmotion.disgust / info.count.today;
		info.emotion.today.fear = todayEmotion.fear / info.count.today;
		info.emotion.today.happiness = todayEmotion.happiness / info.count.today;
		info.emotion.today.neutral = todayEmotion.neutral / info.count.today;
		info.emotion.today.sadness = todayEmotion.sadness / info.count.today;
		info.emotion.today.surprise = todayEmotion.surprise / info.count.today;
	}
}

function InitialiseInfo() {
	info = {};
	totalAge = 0;
	todayAge = 0;
	totalEmotion = {
      "anger": 0,
      "contempt": 0,
      "disgust": 0,
      "fear": 0,
      "happiness": 0,
      "neutral": 0,
      "sadness": 0,
      "surprise": 0
    };
    todayEmotion = {
      "anger": 0,
      "contempt": 0,
      "disgust": 0,
      "fear": 0,
      "happiness": 0,
      "neutral": 0,
      "sadness": 0,
      "surprise": 0
    };
}

function CloseDBConnection(db) {
	db.close();
}