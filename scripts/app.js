angular.module("todoListApp", [])
.controller('mainCtrl', ($scope) => {
    $scope.learningNgChange = () => {
        console.log("An input Changed");
    };

    $scope.todos = [
        {"name": "clean the house"},
        {"name": "water the dog"},
        {"name": "feed the lawn"},
        {"name": "run"},
        {"name": "swim"}
    ];
});