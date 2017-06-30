app.controller("BrokersController", function ($scope, $http, alertsService) {

    $scope.brokers = [];

    $scope.getAllBrokers = function () {
        $http({
            method: 'GET',
            url: 'http://10.132.221.251:8080/clients'
        }).then(function successCallback(response) {
            $scope.brokers = response.data;
        });
    };

    $scope.connect = function (brokerId) {
        $http({
            method: 'POST',
            url: 'http://10.132.221.251:8080/clients/connect/'+brokerId,
            transformResponse: [function (data) {
                return data;
            }]
        }).then(function successCallback(response) {
            $scope.getAllBrokers();
            alertsService.addAlert("Connect to broker", response.data,"alert-success");
        });
    };

    $scope.disconnect = function (brokerId) {
        $http({
            method: 'POST',
            url: 'http://10.132.221.251:8080/clients/disconnect/'+brokerId,
            transformResponse: [function (data) {
                return data;
            }]
        }).then(function successCallback(response) {
            $scope.getAllBrokers();
            alertsService.addAlert("Disconnect to broker",response.data,"alert-success");
        });
    };

});