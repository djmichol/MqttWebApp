app.controller("AlertsController", function ($scope, alertsService) {
    $scope.alerts = [];

    var updateAlerts = function () {
        $scope.alerts = alertsService.getAlerts();
    };
    alertsService.registerObserverCallback(updateAlerts);

    $scope.removeAlert = function (alert) {
        alertsService.removeAlert(alert);
    };
});