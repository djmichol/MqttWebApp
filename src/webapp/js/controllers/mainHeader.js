app.controller("MainHeaderController", function ($scope, $timeout, $http, userService) {

    $scope.notifications = [];

    $scope.initNewNotifications = function () {
        $http({
            method: 'GET',
            url: 'http://10.132.221.251:8080/notifications'
        }).then(function successCallback(response) {
            $scope.notifications = response.data;
        }, function errorCallback(response) {
            console.log("Can not get notifications!!!")
        });
        $timeout($scope.initNewNotifications, 3000);
    };

    $scope.user = userService.user;

});