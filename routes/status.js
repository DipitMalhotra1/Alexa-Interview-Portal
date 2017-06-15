var mongoose= require('mongoose');
var express= require('express');
var bodyParser = require('body-parser');
var Status= require('../models/Status');
var statusRouter = express.Router();
var MongoClient= require('mongodb').MongoClient,
    assert = require('assert');
statusRouter.use(bodyParser.json());

var url= 'mongodb://admin:admin@ds127492.mlab.com:27492/filtered';
var dboper = require('../operations');



statusRouter.route('/:name')

    .get(function (req,res,next) {


        MongoClient.connect(url, function (err, db) {
            assert.equal(err, null);
            console.log("Connected successfully to the server");

            var collections = db.collection("Interview");
            dboper.findPending(db,"Interview",req.params.name,function(docs){
                res.json(docs)
            })

                })

        })



    .delete(function (req,res,next) {
        Status.remove({}, function (err, resp) {
            if(err) throw err;
            res.json(resp);

        });
    });


module.exports= statusRouter;