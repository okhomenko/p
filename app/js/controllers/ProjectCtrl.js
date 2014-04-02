(function (angular) {
  'use strict';

  var module = angular.module('p');

  module.controller('ProjectCtrl', function ($scope,
                                             $routeParams,
                                             ProjectsSvc) {

    function successSaving() {
      refresh();
    }

    $scope.save = function () {
      var id, data;

      id = $scope.original._id;
      data = $scope.project;

      ProjectsSvc.update({id: id}, data, successSaving);
    };

    function createCopy() {
      $scope.project = angular.copy($scope.original);
    }

    function success() {
      createCopy();
    }

    $scope.keyPress = function ($event) {
      if ($event.keyCode !== 13) return;
      $scope.save();
    };

    function refresh() {
      var id;

      id = $routeParams.id;
      $scope.original = ProjectsSvc.get({id: id}, success);
    }

    function init() {
      refresh();
    }

    init();

  });

}(window.angular));
