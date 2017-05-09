'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.6a51579c-c159-46ce-969b-440a7470f215";

var HELP_MESSAGE = "You can ask me about a candidate's interview details, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";


var candidates = [
    { name: "Harry", Interview_Date: "May 8th 2017", Status: "Completed"},
    { name: "Max", Interview_Date: "June 18th 2017", Status: "InComplete"},
    { name: "John", Interview_Date: "Aug 8th 2017", Status: "Pending"},
    { name: "David", Interview_Date: "Dec 8th 2017", Status: "Completed"},
    { name: "Tommy", Interview_Date: "July 8th 2017", Status: "Pending"},
    { name: "Oliver", Interview_Date: "Feb 8th 2017", Status: "Completed"},


];

// var candidates = {
//     "Harry" : {
//         "Interview_Date": "May 8th 2017",
//         "Status": "Completed"
//     },
//     "Max" : {
//         "Interview_Date": "June 9th 2017",
//         "Status": "Incomplete"
//     },
//     "John" : {
//         "Interview_Date": "Aug 18th 2017",
//         "Status": "Inprocess"
//     },
//     "Alex" : {
//         "Interview_Date": "Jan 28th 2017",
//         "Status": "Completed"
//     },
//     "Tommy" : {
//         "Interview_Date": "May 18th 2017",
//         "Status": "Incomplete"
//     },
//     "Oliver" : {
//         "Interview_Date": "Feb 28th 2017",
//         "Status": "Incomplete"
//     },
//     "David" : {
//         "Interview_Date": "Apr 1st 2017",
//         "Status": "Inprocess"
//     }
// }


exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {

        this.emit(':ask', 'Welcome to Filetered Candidate Portal! I can give you the details of all the candidates: '+
        "I can only give candidate information at a time. Which candidate  are you interested in?")

    },
    'Interview': function () {

        var candidate = candidates[Math.floor(Math.random() * candidates.length)];

        console.log(candidate)

        // var Interview_Date =candidates[candidate]
        // var candidate_status = candidates[candidate].Status
        if (candidate) {

            var speechOutput = "Name: "+candidate.name+  "Interview_Date" + candidate.Interview_Date + " and Status" +  candidate.Status + " Do you want to hear about more candidates?"
            var repromptText = "Do you want to hear about more candidates?"

            // var shouldEndSession = false
            this.emit(':tell', speechOutput, repromptText)
        }
        else{
            this.emit(':tell', "Try Again")

        }

    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};


