app.controller("AddNewBrokerController", function ($scope, $http, $uibModalInstance) {

    $scope.url;
    $scope.user;
    $scope.password;

    $scope.addBroker = function () {
        $http({
            method: 'POST',
            url: 'http://10.132.221.251:8080/clients',
            data: {
                url: $scope.url,
                user: $scope.user,
                password: $scope.password
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