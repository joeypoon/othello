Othello = angular.module('othello', ['templates']);

Othello.controller('BoardController', ['$scope', function($scope) {
  var board = new Board();
  $scope.board = board.initialize();
  $scope.turn = 'black';
}]);

Othello.directive('board', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/board.html',
    scope: {
      board: '=',
      turn: '='
    },
    controller: ['$scope', function($scope) {
      $scope.changeTurn = function() {
        if ($scope.turn == 'black') {
          $scope.turn = 'white'
        } else {
          $scope.turn = 'black'
        }
      }
    }]
  }
});

Othello.directive('square', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/square.html',
    scope: {
      board: '=',
      turn: '=',
      row: '@',
      column: '@',
      color: '@'
    },
    controller: ['$scope', function($scope) {
      $scope.square = $scope.board.rows[$scope.row - 1][$scope.column - 1];
      $scope.placePiece = function() {
        $scope.square.color = $scope.turn;
      }
    }]
  }
});

function Board() {
  this.rows = [];
  this.initialize = function() {
    for(var r = 1; r <= 8; r++) {
      var row = [];
      for(var c = 1; c <= 8; c++) {
        row.push(new Square(r, c));
      }
      this.rows.push(row);
    }
    return this
  }
}

function Square(r, c) {
  this.row = r;
  this.column = c;
  if ((r == 4 && c == 4) || (r == 5 && c == 5)) {
    this.color = 'white';
  } else if ((r == 4 && c == 5) || (r == 5 && c == 4)) {
    this.color = 'black';
  }
}