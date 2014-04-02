'use strict';

var _ = require('underscore'),
    Projects = require('../utils/db').Projects;

// 500 - if error
// 200 and collection - if pulled properly
exports.list = function (req, res) {
  function success(err, projects) {
    if (err) res.send(500);
    res.send(projects);
  }

  Projects.find({}, success);
};

// 404 - if not found
// 200 and element - if found
exports.item = function (req, res){
  var id = req.params.id;

  function success(err, project) {
    if (err) res.send(404);
    res.send(project);
  }

  Projects.findById(id, success);
};

// 500 - if no success
// 200 and element - if created
exports.create = function (req, res) {
  var project;

  function success(err, project) {
    if (err) res.send(500);
    res.send(project);
  }

  project = new Projects(req.body);
  project.save(success);
};

// 404 - if not found
// 200 - if updated
exports.update = function (req, res) {
  var id = req.params.id, body = _.omit(req.body, '_id');

  function success(err) {
    if (err) res.send(404);
    res.send(200);
  }

  Projects.findOneAndUpdate({ _id: id }, body, success);
};

// 404 - if not found
// 200 and element - if removed
exports.remove = function (req, res) {
  var id = req.params.id;

  function success(err, doc) {
    if (err) res.send(404);
    res.send(doc);
  }

  Projects.findOneAndRemove({ _id: id }, success);
};
