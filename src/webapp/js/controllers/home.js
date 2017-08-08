app.controller("HomeController", function ($scope, $http, contentHeader) {
    $scope.sensorData = [];

    contentHeader.setHeader("Dashboard", "");

});