var app = angular.module('mqttDashboard', ["ngRoute", "ui.bootstrap"]).config(function ($routeProvider, $httpProvider) {
    $routeProvider.when("/home", {
        templateUrl: "view/home.html"
    })
    .when("/brokers", {
        templateUrl: "view/brokers.html",
        controller: "BrokersController"
    })
    .when("/notifications", {
        templateUrl: "view/notifications.html",
        controller: "NotificationsController"
    })
    .otherwise({
        redirectTo: "/home"
    });

    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.interceptors.push('errorHttpInterceptor');
});

angular.element(function(){
    angular.bootstrap(document, ['mqttDashboard']);
});

app.run(function($rootScope, alertsService) {
    $rootScope.$on("$locationChangeStart", function(event, next, current) {
        alertsService.clearAlerts();
    });
});