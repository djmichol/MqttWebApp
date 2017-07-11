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
    .when("/sensorData", {
        templateUrl: "view/sensorData.html",
        controller: "SensorDataController"
    })
    .when("/places", {
        templateUrl: "view/places.html",
        controller: "PlacesController"
    })
    .when("/dictionary", {
        templateUrl: "view/dictionaries.html",
        controller: "DictionariesController"
    })
    .when("/dictionary/:code", {
        templateUrl: "view/dictionaryDetails.html",
        controller: "DictionaryDetailsController"
    })
    .when("/topics", {
        templateUrl: "view/topics.html",
        controller: "TopicsController"
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