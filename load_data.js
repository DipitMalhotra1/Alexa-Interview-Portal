/**
 * Created by dipit on 5/18/17.
 */
var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:27017",
    accessKeyId: '',  // can omit access key and secret key
    secretAccessKey: ''
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing Candidates Interview Data into DynamoDB. Please wait.");

var allCandidates = JSON.parse(fs.readFileSync('document.json', 'utf8'));
allCandidates.forEach(function(candidate) {
    var params = {
        TableName: "Interview_Candidates",
        Item: {
            "candidate_id":  candidate.candidate_id,
            "candidate_name": candidate.candidate_name,
            "candidate_testDate":  candidate.candidate_testDate,
            "candidate_interview_status": candidate.interview_status
        }
    };

    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add candidate data", candidate.candidate_name, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", candidate.candidate_name);
        }
    });
});
