const   path = require('path'),
		express = require('express'),
		cs = require('./module-cs.js'),
		mongo = require("./mongo-module.js");

var		app = express(),
		seenFaces = [];

app.use(express.static(path.resolve(__dirname, 'client')));

app.get("/photoSend", cs.PhotoTreatment(seenFaces));

app.get("/getInfo", mongo.mongo_get_info);

app.get("/hello", (req, res) => {
	console.log("Hello !");
	res.json({text: "Hello !"});
});

app.listen(process.env.PORT || 80, process.env.IP || "0.0.0.0", () => {
    console.log("Chat server");
});
