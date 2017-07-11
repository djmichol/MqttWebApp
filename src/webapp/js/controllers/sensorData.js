app.controller("SensorDataController", function ($scope, $http, alertsService) {

    $scope.topic = "";
    $scope.dataType = "";
    $scope.sensorData = {};

    $scope.getAllSensorData = function () {
        var url = "http://10.132.221.251:8080/sensorsData";
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