// // /**
// //  * Created by dipit on 5/18/17.
// //  */
// //
// //
// // var AWS = require("aws-sdk");
// //
// // AWS.config.update({
// //     region: "us-west-2",
// //     endpoint: "http://localhost:8000"
// // });
// //
// // var dynamodb = new AWS.DynamoDB();
// //
// // var params = {
// //     TableName : "Interview_Candidates",
// //     KeySchema: [
// //         { AttributeName: "candidate_id", KeyType: "HASH"},  //Partition key
// //         { AttributeName: "candidate_name", KeyType: "RANGE" },
// //         { AttributeName: "candidate_testDate", KeyType: "RANGE" },
// //         { AttributeName: "interview_status", KeyType: "RANGE" }
// //
// // //Sort key
// //     ],
// //     AttributeDefinitions: [
// //         { AttributeName: "candidate_id", AttributeType: "N" },
// //         { AttributeName: "candidate_name", AttributeType: "S" },
// //         { AttributeName: "candidate_testDate", AttributeType: "S" },
// //         { AttributeName: "interview_status", AttributeType:"S"}
// //
// //
// //     ],
// //     ProvisionedThroughput: {
// //         ReadCapacityUnits: 10,
// //         WriteCapacityUnits: 10
// //     }
// // };
// //
// // dynamodb.createTable(params, function(err, data) {
// //     if (err) {
// //         console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
// //     } else {
// //         console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
// //     }
// // });
//
//
// var AWS = require("aws-sdk");
//
// AWS.config.update({
//     region: "us-west-2",
//     endpoint: "http://localhost:8000"
// });
//
// var dynamodb = new AWS.DynamoDB();
//
// var params = {
//     TableName : "Movies",
//     KeySchema: [
//         { AttributeName: "year", KeyType: "HASH"},  //Partition key
//         { AttributeName: "title", KeyType: "RANGE" }  //Sort key
//     ],
//     AttributeDefinitions: [
//         { AttributeName: "year", AttributeType: "N" },
//         { AttributeName: "title", AttributeType: "S" }
//     ],
//     ProvisionedThroughput: {
//         ReadCapacityUnits: 10,
//         WriteCapacityUnits: 10
//     }
// };
//
// dynamodb.createTable(params, function(err, data) {
//     if (err) {
//         console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
//     }
// });

var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:27017",
    accessKeyId: 'AKIAJUR3IGTUEFSLM6LA',  // can omit access key and secret key
    secretAccessKey: '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'
});


var createUsers = function(callback) {
    var dynamodb = new AWS.DynamoDB();
    var params = {
    TableName : "Interview_Candidates",
    KeySchema: [
        { AttributeName: "candidate_id", KeyType: "HASH"},  //Partition key
        { AttributeName: "candidate_name", KeyType: "RANGE" },
        { AttributeName: "candidate_testDate", KeyType: "RANGE" },
        { AttributeName: "interview_status", KeyType: "RANGE" }

//Sort key
    ],
    AttributeDefinitions: [
        { AttributeName: "candidate_id", AttributeType: "N" },
        { AttributeName: "candidate_name", AttributeType: "S" },
        { AttributeName: "candidate_testDate", AttributeType: "S" },
        { AttributeName: "interview_status", AttributeType:"S"}


    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

    dynamodb.createTable(params, callback);
};