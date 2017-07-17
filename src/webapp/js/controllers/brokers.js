app.controller("BrokersController", function ($scope, $http, alertsService, $uibModal) {

    $scope.brokers = [];

    $scope.getAllBrokers = function () {
        $http({
            method: 'GET',
            url: 'http://10.132.221.251:8080/clients'
        }).then(function successCallback(response) {
            $scope.brokers = response.data;
        });
    };

    $scope.openAddBrokerModal = function () {
        $uibModal.open({
            templateUrl: 'view/addNewBroker.html',
            controller: "AddNewBrokerController"
        });
    };

    $scope.openAddTopicModal = function (brokerID) {
        var modalInstance = $uibModal.open({
            templateUrl: 'view/addTopic.html',
            controller: "AddTopicController",
            resolve: {
                brokerId: brokerID
            }
        });

        modalInstance.result.then(function (newTopic) {
            var changedItem = $scope.brokers.filter(function(item) {
                return item.brokerId === newTopic.brokerId;
            })[0];
            changedItem.topics.push(newTopic);
        });
    };

    $scope.connect = function (brokerId) {
        $http({
            method: 'POST',
            url: 'http://10.132.221.251:8080/clients/connect/'+brokerId,
        }).then(function successCallback(response) {
            $scope.getAllBrokers();
            alertsService.addAlert("Connect to broker", response.data.message,"alert-success");
        });
    };

    $scope.disconnect = function (brokerId) {
        $http({
            method: 'POST',
            url: 'http://10.132.221.251:8080/clients/disconnect/'+brokerId
        }).then(function successCallback(response) {
            $scope.getAllBrokers();
            alertsService.addAlert("Disconnect to broker",response.data.message,"alert-success");
        });
    };

});