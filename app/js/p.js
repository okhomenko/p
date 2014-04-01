(function (angular) {
  'use strict';

  var module = angular.module('p');

  module.config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'resources/home.html',
        controller: 'HomeCtrl'
      })
      .when('/projects', {
        templateUrl: 'resources/projects/list.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projects/:id', {
        templateUrl: 'resources/projects/item.html',
        controller: 'ProjectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });


  });

}(window.angular));
