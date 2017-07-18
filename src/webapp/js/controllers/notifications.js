app.controller("NotificationsController", function ($scope, $http) {

    $scope.notifications = [];

    var getAllNotifications = function () {
        $http({
            method: 'GET',
            url: 'http://10.132.221.251:8080/notifications',
            params: {read: true}
        }).then(function successCallback(response) {
            $scope.notifications = response.data;
            readNotifications();
        });
    };

    var readNotifications = function () {
        var notificationsIds = $scope.notifications.filter(function (item) {
            return item.read != true;
        }).map(function (item) {
            return item.id;
        });
        if(notificationsIds.length > 0) {
            $http({
                method: 'POST',
                url: 'http://10.132.221.251:8080/notifications',
                params: {notificationIds: notificationsIds}
            });
        }
    }

    $scope.init = function () {
        getAllNotifications();
    }
});