app.controller("HomeController", function ($scope, $http, contentHeader) {
    $scope.sensorData = [];

    contentHeader.setHeader("Dashboard", "");

    $scope.getData = function () {
        $http({
            method: 'GET',
            url: "/sensorsData/latest"
        }).then(function successCallback(response) {
            $scope.sensorData = response.data;
        });
    };

});