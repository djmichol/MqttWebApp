app.controller("PlacesController", function ($scope, $http, alertsService) {

    $scope.place = "";
    $scope.room = "";
    $scope.places;

    $scope.getPlaces = function () {
        $http({
            method: 'GET',
            url: "http://10.132.221.251:8080/place"
        }).then(function successCallback(response) {
            $scope.places = response.data;
        });
    };

    $scope.addPlace = function () {
        $http({
            method: 'POST',
            url: "http://10.132.221.251:8080/place",
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