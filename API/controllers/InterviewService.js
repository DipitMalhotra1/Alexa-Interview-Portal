'use strict';

exports.addInterview = function(args, res, next) {
  /**
   * Add a new interview to the Portal
   * 
   *
   * body Body_1 Interview object that needs to be added to the Portal
   * no response value expected for this operation
   **/
  res.end();
}

exports.deleteInterview = function(args, res, next) {
  /**
   * Deletes a interview
   * 
   *
   * interviewId Long Interview id to delete
   * api_key String  (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.findInterviewsByStatus = function(args, res, next) {
  /**
   * Finds Interviews by status
   * Enter the status to get information
   *
   * status List Status values that need to be considered for filter
   * returns List
   **/
  var examples = {};
//   examples['application/json'] = [ {
//   "name" : "doggie",
//   "id" : 123456789,
//   "status" : "aeiou"
// } ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}




exports.getInterviewById = function(args, res, next) {
  /**
   * Find interview by ID
   * Returns a single interview information
   *
   * interviewId Long ID of interview to return
   * returns inline_response_200_1
   **/
  var examples = {};
//   examples['application/json'] = {
//   "name" : "doggie",
//   "id" : 123456789,
//   "status" : "aeiou"
// };
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updateInterview = function(args, res, next) {
  /**
   * Update an existing interview
   * 
   *
   * body Body Interview object that needs to be added to the Portal
   * no response value expected for this operation
   **/
  res.end();
}

exports.updateInterviewWithForm = function(args, res, next) {
  /**
   * Updates a interview in the portal with form data
   * 
   *
   * interviewId Long ID of interview that needs to be updated
   * name String Updated name of the interview (optional)
   * status String Updated status of the interview (optional)
   * no response value expected for this operation
   **/
  res.end();
}

