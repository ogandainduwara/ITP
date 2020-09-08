'use strict';
const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(express.static(__dirname));

var url = 'mongodb+srv://yohan:yohan@cluster.ly4e9.mongodb.net/AFIO?retryWrites=true&w=majority';
app.get('/feedback', (req, res, next) => {
    console.log("request received for get ");
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("DB Connected");
        var dbo = db.db("AFIO");
        dbo.collection("debits").find({}).toArray(function (err, result) {
            if (err) throw err;

            res.send("Done");
            db.close();
        });
    });

});




app.listen(process.env.PORT || 5000, function () {
    console.log("SERVER STARTED PORT: 5000");
});