app.controller("NotificationsController", function ($scope, $http, alertsService) {

    $scope.notifications = {};

    $scope.getAllNotifications = function () {
        $http({
            method: 'GET',
            url: 'http://10.132.221.251:8080/notifications'
        }).then(function successCallback(response) {
            $scope.notifications = response.data;
        });
    };
});