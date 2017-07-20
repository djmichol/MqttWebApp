app.controller("SensorDataController", function ($scope, $http, alertsService, contentHeader) {

    $scope.topic = "";
    $scope.dataType = "";
    $scope.sensorData = {};

    contentHeader.setHeader("Sensors data", "Filter data from all sensors");

    $scope.getAllSensorData = function () {
        var url = "/sensorsData";
        if( $scope.topic!=null &&  $scope.topic!=""){
            url = url+'/'+$scope.topic;
        }else if($scope.dataType!=null &&  $scope.dataType!=""){
            url = url+'/dataType='+$scope.dataType;
        }
        $http({
            method: 'GET',
            url: url
        }).then(function successCallback(response) {
            $scope.sensorData = response.data;
        }, function errorCallback(response) {
            alertsService.addAlert(response.data, "alert-danger");
        });
    };
});