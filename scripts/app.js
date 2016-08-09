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
})
.service('dataService', function($http){
    this.helloConsole = function() {
        console.log('This is the hello console service!');
    };

    this.getTodos = function(callback) {
        $http.get('mock/todos.json').then(callback);
    };
});