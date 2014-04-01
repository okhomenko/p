'use strict';

var u = require('../utils/utils'),
    _ = require('underscore');

var projects = [];

function nextId(arr) {
  return arr.length;
}

function treatNotFound(req, res) {
  var id = u.treatBadSyntax(req, res, 'id', 'number');
  return u.treatNotFound(req, res, projects, {id: id});
}

exports.list = function (req, res){
  res.send(projects);
};

exports.item = function (req, res){
  res.send(treatNotFound(req, res));
};

exports.create = function (req, res) {
  var project;

  project = req.body;
  project.id = nextId(projects);

  projects.push(project);

  res.send(project);
};

exports.update = function (req, res) {
  var project;

  project = treatNotFound(req, res);
  _.extend(project, req.body);

  res.send(200);
};

exports.remove = function (req, res) {
  var found, removed, idx;

  found = treatNotFound(req, res);

  idx = projects.indexOf(found);
  removed = projects.splice(idx, 1);

  res.send(removed[0]);
};
