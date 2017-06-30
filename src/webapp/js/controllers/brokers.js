app.controller("BrokersController", function ($scope, $http, alertsService) {

    $scope.brokers = [];

    $scope.getAllBrokers = function () {
        $http({
            method: 'GET',
            url: 'http://10.132.221.251:8080/clients'
        }).then(function successCallback(response) {
            $scope.brokers = response.data;
        }, function errorCallback(response) {
            alertsService.addAlert(response.data,"alert-danger");
        });
    };

    $scope.connect = function (brokerId) {
        $http({
            method: 'PATCH',
            url: 'http://10.132.221.251:8080/clients/connect/'+brokerId
        }).then(function successCallback(response) {
            alertsService.addAlert(response.data,"alert-success");
        }, function errorCallback(response) {
            alertsService.addAlert(response.data,"alert-danger");
        });
    };

    $scope.disconnect = function (brokerId) {
        $http({
            method: 'PATCH',
            url: 'http://10.132.221.251:8080/clients/disconnect/'+brokerId
        }).then(function successCallback(response) {
            alertsService.addAlert(response.data,"alert-success");
        }, function errorCallback(response) {
            alertsService.addAlert(response.data,"alert-danger");
        });
    };

});