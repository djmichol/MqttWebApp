app.directive("alertsDirective", function () {
    return {
        restrict: 'E',
        templateUrl: "view/alerts.html",
        controller: "AlertsController"
    };
});