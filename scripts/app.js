angular.module("todoListApp", [])
.controller('mainCtrl', ($scope, dataService) => {
    $scope.helloConsole = dataService.helloConsole;

    $scope.learningNgChange = () => {
        console.log("An input Changed");
    };

    dataService.getTodos(function(res) {
            console.log(res.data);
            $scope.todos = res.data;
    });

    $scope.deleteTodo = function(todo) {
        dataService.deleteTodo(todo)
    };

    $scope.saveTodo = function(todo) {
        dataService.saveTodo(todo);
    };
})
.service('dataService', function($http){
    this.helloConsole = function() {
        console.log('This is the hello console service!');
    };

    this.getTodos = function(callback) {
        $http.get('mock/todos.json').then(callback);
    };

    this.deleteTodo = function(todo, $index) {
        console.log("The " + todo.name + " todo has been deleted!");
        // other logic
        $scope.todos.splice($index, 1);
    };

    this.saveTodo = function(todo) {
        console.log("The " + todo.name + " todo has been saved!");
    };
});