app.controller("MainHeaderController", function ($scope, $timeout, userService) {

    $scope.user = userService.user;

});