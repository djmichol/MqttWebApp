app.controller("PlacesController", function ($scope, $http, alertsService, contentHeader) {

    $scope.place = "";
    $scope.room = "";
    $scope.places;

    contentHeader.setHeader("Places", "Define places where sensors is");

    $scope.getPlaces = function () {
        $http({
            method: 'GET',
            url: "/place"
        }).then(function successCallback(response) {
            $scope.places = response.data;
        });
    };

    $scope.addPlace = function () {
        $http({
            method: 'POST',
            url: "/place",
            data: {
                "place": $scope.place,
                "room": $scope.room
            }
        }).then(function successCallback(response) {
            $scope.getPlaces();
            alertsService.addAlert("Add new place", response.data.message,"alert-success");
        });
    };

});