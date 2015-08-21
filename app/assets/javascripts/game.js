Othello = angular.module('othello', ['templates']);

Othello.controller('BoardController', function($scope) {
  var board = new Board();
  board.initializeBoard();
  $scope.board = board;
});

Othello.directive('board', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/board.html',
    scope: {
      board: '='
    },
    controller: function($scope) {

    }
  }
});

Othello.directive('row', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/row.html',
    scope: {
      row: '=',
      turn: '@'
    }
  }
});

Othello.directive('square', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/square.html',
    scope: {
      row: '@',
      column: '@',
      color: '@',
    },
    controller: function($scope) {
      $scope.turn = 'black';
      $scope.changeTurn = function() {
        if ($scope.turn == 'black') {
          $scope.turn = 'white'
        } else {
          $scope.turn = 'black'
        }
      }
      $scope.placePiece = function() {
        $scope.color = $scope.turn;
        $scope.changeTurn();
      }
      $scope.changeColor = function() {
        if ($scope.color == 'black') {
          $scope.color = 'white'
        } else {
          $scope.color = 'black'
        }
      }
    }
  }
});

function Board() {
  this.rows = [];
  this.initializeBoard = function() {
    for(var r = 1; r <= 8; r++) {
      var row = [];
      for(var c = 1; c <= 8; c++) {
        row.push(new Square(r, c));
      }
      this.rows.push(row);
    }
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