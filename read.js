var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient()

var table = "Interview_Candidates";

var candidate_id = 2015;
var candidate_name="Jas";
var candidate_testDate="Dec 6th 2017";
var interview_status="completed";

var params = {
    TableName: table,
    Key:{
        "candidate_id": candidate_id,
        "candidate_name":candidate_name,
        "candidate_testDate" :candidate_testDate,
        "interview_status": interview_status
    }
};

docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
});