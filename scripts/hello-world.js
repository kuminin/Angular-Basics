angular.module('todoListApp')
.directive('helloWorld', () => {
    return {
        template: "This is the hello world directive!",
        restrict: "E"
    };
});