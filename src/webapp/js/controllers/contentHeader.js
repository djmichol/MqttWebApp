app.controller("ContentHeaderController", function ($scope, contentHeader) {

    $scope.header = "Page header";
    $scope.description = "Page description";

    $scope.$on('pageHeader:updated', function(event,data) {
        $scope.header = data.header;
        $scope.description = data.description;
    });
});