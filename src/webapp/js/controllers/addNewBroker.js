app.controller("AddNewBrokerController", function ($scope, $http, $uibModalInstance) {

    $scope.brokerUrl;
    $scope.brokerUser;
    $scope.brokerPassword;
    $scope.brokerName;

    $scope.addBroker = function () {
        $http({
            method: 'POST',
            url: '/brokers',
            data: {
                "url": $scope.brokerUrl,
                "user": $scope.brokerUser,
                "password": $scope.brokerPassword,
                "name":  $scope.brokerName
            }
        }).then(function successCallback(response) {
            $scope.brokers = response.data;
        });
    };

    $scope.ok = function () {
        $scope.addBroker();
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

});