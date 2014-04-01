'use strict';

var _ = require('underscore'),
    is = {}, parse = {};

is.type = function (object, type) {
  return typeof object === type;
};

is.number = function (number) {
  return is.type(number, 'number');
};

is.string = function (string) {
  return is.type(string, 'string');
};

is.undefined = function (undef) {
  return is.type(undef, 'undefined');
};

is.object = function (object) {
  return Object.prototype.toString.call(object) === '[object Object]';
};

is.array = function (object) {
  return Object.prototype.toString.call(object) === '[object Array]';
};

parse.number = function (val) {
  return parseInt(val, 10);
};

// Try to find param, parse it
// and set status 400 if param has incorrect type
function treatBadSyntax(req, res, paramName, type) {
  var key, parseFn, isType;

  key = req.params[paramName];
  parseFn = parse[type];
  isType = is[type];

  var val = parseFn(key);
  if (!isType(val)) res.send(400);

  return val;
}

function treatNotFound(req, res, list, needle) {
  var found;

  found = _.findWhere(list, needle);
  if (!is.object(found)) res.status(404);

  return found;
}

exports.is = is;
exports.parse = parse;
exports.treatBadSyntax = treatBadSyntax;
exports.treatNotFound = treatNotFound;
