(function (angular) {
  'use strict';

  var module = angular.module('p');

  module.controller('ProjectsCtrl', function ($scope,
                                              ProjectsSvc) {

    $scope.create = function () {
      var name, data, project;

      data = $scope.newProject;
      name = data.name.trim();
      if (name === '') return;

      function success() {
        refresh();
        clearName();
        console.log('success saving');
      }

      function error() {
        console.log('error saving');
      }

      project = new ProjectsSvc(data);
      project.$save(success, error);
    };

    $scope.remove = function (index) {

      function success() {
        refresh();
      }

      function error() {

      }

      ProjectsSvc.remove({id: index}, success, error);
    };

    function clearName() {
      $scope.newProject.name = '';
    }

    function refresh() {

      function success(data) {
        console.log('success list');
        $scope.list = data;
      }

      function error() {
        console.log('error list');
      }

      ProjectsSvc.query(success, error);
    }

    function init() {
      refresh();
    }

    init();

  });

}(window.angular));
