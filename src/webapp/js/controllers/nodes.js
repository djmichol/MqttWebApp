app.controller("NodesController", function ($scope, $http, alertsService, $uibModal, contentHeader) {

    $scope.nodes = [];

    contentHeader.setHeader("Nodes", "Nodes details");

    $scope.getAllNodes = function () {
        $http({
            method: 'GET',
            url: '/node'
        }).then(function successCallback(response) {
            $scope.nodes = response.data;
        });
    };

    $scope.openAddNodeModal = function () {
        $uibModal.open({
            templateUrl: 'view/addNewNode.html',
            controller: "AddNewNodeController"
        });
    };

});