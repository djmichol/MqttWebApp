app.controller("HomeController", function ($scope, $http) {
    $scope.sensorData = [];

    $scope.getData = function () {
        $http({
            method: 'GET',
            url: "http://10.132.221.251:8080/sensorsData/latest"
        }).then(function successCallback(response) {
            $scope.sensorData = response.data;
        });
    };

});