var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
var dateFormat = require('dateformat');

var dboper = require('./operations');

// Connection URL
var url = 'mongodb://localhost:27017/AlexaDB';

// Use connect method to connect to the Server


MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    dboper.insertDocument(db, [

        {candidate_id: 0, candidate_name: "Harry", candidate_testDate:dateFormat("Jun 9 2017", "fullDate"), interview_status: "Completed"},
        {candidate_id: 1, candidate_name: "Max", candidate_testDate:dateFormat("July 19 2017", "fullDate"), interview_status: "Incomplete"},
        {candidate_id: 2, candidate_name: "Dave", candidate_testDate:dateFormat("August 01 2017", "fullDate"), interview_status: "Pending"},
        {candidate_id: 3, candidate_name: "David", candidate_testDate:dateFormat("December 10 2017", "fullDate"), interview_status: "Completed"},
            {candidate_id: 4, candidate_name: "Tommy", candidate_testDate:dateFormat("January 10 2017", "fullDate"), interview_status: "Pending"},
            {candidate_id: 5, candidate_name: "Oliver", candidate_testDate:dateFormat("March 11 2017", "fullDate"), interview_status: "Completed"}],
        "interview_details", function (result) {
            console.log(result.ops);
        });


});

