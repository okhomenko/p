(function (angular) {
  'use strict';

  var module = angular.module('p');

  module.factory('ProjectsSvc', function ($resource) {

    var Service, url, opts, actions;

    url = "http://localhost:3000/projects/:id";

    opts = {
      id: '@id'
    };

    actions = {
      update: {
        method: 'PUT'
      }
    };

    Service = $resource(url, opts, actions);


    return Service;

  });

}(window.angular));

