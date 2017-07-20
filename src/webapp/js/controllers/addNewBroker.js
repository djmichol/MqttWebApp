app.controller("AddNewBrokerController", function ($scope, $http, $uibModalInstance) {

    $scope.brokerUrl;
    $scope.brokerUser;
    $scope.brokerPassword;

    $scope.addBroker = function () {
        $http({
            method: 'POST',
            url: '/clients',
            data: {
                "url": $scope.brokerUrl,
                "user": $scope.brokerUser,
                "password": $scope.brokerPassword
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