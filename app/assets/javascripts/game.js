Othello = angular.module('othello', ['templates']);

Othello.controller("BoardController", function($scope) {
  $scope.turn = 'black';
  $scope.changeTurn = function() {
    if ($scope.turn === 'black') {
      $scope.turn = 'white'
    } else {
      $scope.turn = 'black'
    }
  }
});

Othello.directive("square", function() {
  return {
    restrict: 'E',
    templateUrl: "templates/square.html.erb",
    scope: {
      row: '=',
      column: '=',
      turn: '='
    },
    controller: function($scope) {
      $scope.placePiece = function() {
        if ($scope.turn === 'black') {
          $scope.black = true;
          $scope.white = false;
        } else {
          $scope.black = false;
          $scope.white = true;
        }
      }
    }
  };
});