app.controller("SensorsController", function ($scope, $http, contentHeader) {

    $scope.sensors = [];

    contentHeader.setHeader("Sensors", "Sensors details");

    $scope.getAllSensors = function () {
        $http({
            method: 'GET',
            url: '/sensor'
        }).then(function successCallback(response) {
            $scope.sensors = response.data;
        });
    };

});