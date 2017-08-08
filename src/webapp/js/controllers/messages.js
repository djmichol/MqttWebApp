app.controller("MessagesController", function ($scope, $http, contentHeader) {

    $scope.messages = [];

    contentHeader.setHeader("Messages", "Messages details");

    $scope.getAllReceivedMessages = function () {
        $http({
            method: 'GET',
            url: '/message/recived'
        }).then(function successCallback(response) {
            $scope.messages = response.data;
        });
    };

    $scope.getAllSendMessages = function () {
        $http({
            method: 'GET',
            url: '/message/send'
        }).then(function successCallback(response) {
            $scope.messages = response.data;
        });
    };

});