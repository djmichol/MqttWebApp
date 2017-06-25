app.controller("MainHeaderController", function ($scope, notificationService, userService) {

    $scope.notifications = notificationService.notifications;
    $scope.user = userService.user;

});