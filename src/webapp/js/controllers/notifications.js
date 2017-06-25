app.controller("NotificationsController", function ($scope, notificationService) {

    $scope.notifications = notificationService.notifications;

});