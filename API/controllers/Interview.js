'use strict';

var url = require('url');

var Interview = require('./InterviewService');

module.exports.addInterview = function addInterview (req, res, next) {
  Interview.addInterview(req.swagger.params, res, next);
};

module.exports.deleteInterview = function deleteInterview (req, res, next) {
  Interview.deleteInterview(req.swagger.params, res, next);
};

module.exports.findInterviewsByStatus = function findInterviewsByStatus (req, res, next) {
  Interview.findInterviewsByStatus(req.swagger.params, res, next);
};

module.exports.getInterviewById = function getInterviewById (req, res, next) {
  Interview.getInterviewById(req.swagger.params, res, next);
};

module.exports.updateInterview = function updateInterview (req, res, next) {
  Interview.updateInterview(req.swagger.params, res, next);
};

module.exports.updateInterviewWithForm = function updateInterviewWithForm (req, res, next) {
  Interview.updateInterviewWithForm(req.swagger.params, res, next);
};
