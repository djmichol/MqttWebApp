app.controller("PlacesController", function ($scope, $http, contentHeader) {

    $scope.rooms;

    contentHeader.setHeader("Rooms", "Define rooms where sensors is");

    $scope.getPlaces = function () {
        $http({
            method: 'GET',
            url: "/room"
        }).then(function successCallback(response) {
            $scope.rooms = response.data;
        });
    };
});