angular.module("todoListApp", [])
.controller('mainCtrl', ($scope) => {
    $scope.helloWorld = () => {
        console.log("Hello there! This is the helloWorld controller function, in the mainCtrl!");
    };

    $scope.todos = [
        {"name": "clean the house"},
        {"name": "water the dog"},
        {"name": "feed the lawn"},
        {"name": "run"},
        {"name": "swim"}
    ];
});