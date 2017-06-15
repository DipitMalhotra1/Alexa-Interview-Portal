/**
 * Created by dipit on 6/13/17.
 */
var mongoose= require('mongoose');

var express= require('express');
var bodyParser = require('body-parser');
var Interview= require('../models/Interviews');
var interviewRouter = express.Router();
var dboper = require('../operations');

var MongoClient= require('mongodb').MongoClient,
    assert = require('assert');
interviewRouter.use(bodyParser.json());

var url= 'mongodb://dev:admin@ds127492.mlab.com:27492/filtered';


interviewRouter.use(bodyParser.json());


interviewRouter.route('/')

    .get(function (req,res,next) {

        MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            console.log("Connected correctly to server");

            dboper.findDocuments(db, "Interview",function (docs) {
                console.log(docs);
                res.json(docs)
            })
        })

    })

    .post(function (req,res,next) {

        MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            console.log("Connected correctly to server");
            dboper.insertDocument(db,req.body,"Interview")

        })
    })
    .delete(function (req,res,next) {
        MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            console.log("Connected correctly to server");
            dboper.removeDocument(db,req.body,"Interview",function (docs) {
                console.log("Deleted record")
            })

            })

    });

interviewRouter.route('/:InterviewId')

    .get(function (req,res,next) {

        MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            console.log("Connected correctly to server");
            console.log(req.params)

            dboper.findbyId(db,"Interview", req.params.InterviewId,function (docs) {
                res.json(docs);
            })

            })

    })
    .put(function (req,res,next) {
        MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            console.log("Connected correctly to server");
            var collections = db.collection("Interview");
            dboper.updateDocument(db,{"_id": req.params.InterviewId},{creator: 5000},"Interview", function (docs) {
                console.log(docs)

            } )

        })
    })

    .delete(function (req,res,next) {

        MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            console.log("Connected correctly to server");
            dboper.removeDocument(db,{"_id": req.params.InterviewId},"Interview",function(docs){
            console.log("Deleted Record")

        })

        // Interview.findByIdAndRemove(req.params.InterviewId, function (err, resp) {
        //     if(err) throw err;
        //     res.json(resp);

        })
    });





module.exports= interviewRouter;