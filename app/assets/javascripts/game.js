Othello = angular.module('othello', ['templates']);

Othello.controller("BoardController", function($scope) {
});

Othello.controller("SquareController", function($scope) {
});

Othello.directive("board", function() {
  return {
    restrict: 'E',
    templateUrl: "templates/board.html.erb",
  }
});

Othello.directive("square", function() {
  return {
    restrict: 'E',
    templateUrl: "templates/square.html.erb",
    controller: function($scope) {
      $scope.black = false;
      $scope.white = false;
      $scope.empty = false;
    }
  };
});