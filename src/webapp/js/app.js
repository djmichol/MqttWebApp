var app = angular.module('mqttDashboard', ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "view/home.html"
    })
    .when("/brokers", {
        templateUrl: "view/brokers.html",
        controller: "BrokersController"
    })
    .when("/topics", {
        templateUrl: "view/topics.html",
        controller: "TopicsController"
    })
    .when("/notifications", {
        templateUrl: "view/notifications.html",
        controller: "NotificationsController"
    })
    .otherwise({
        redirectTo: "/home"
    });
});

angular.element(function(){
    angular.bootstrap(document, ['mqttDashboard']);
});

app.run(function($rootScope, alertsService) {
    $rootScope.$on("$locationChangeStart", function(event, next, current) {
        alertsService.clearAlerts();
    });
});