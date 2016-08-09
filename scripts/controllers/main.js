'use strict';

angular.module('todoListApp')
.controller('mainCtrl', ($scope, dataService) => {
    $scope.todos = [];
    $scope.helloConsole = dataService.helloConsole;

    $scope.addTodo = function() {
        var todo = {name: "This is a new todo."};
        $scope.todos.push(todo);
    };

    dataService.getTodos(function(res) {
        console.log(res.data);
        $scope.todos = res.data;
    });

    $scope.deleteTodo = function(todo, $index) {
        dataService.deleteTodo(todo);
        $scope.todos.splice($index, 1);
    };

    $scope.saveTodo = function(todo) {
        dataService.saveTodo(todo);
    };
});