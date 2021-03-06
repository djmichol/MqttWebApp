var app = angular.module('mqttDashboard', ["ngRoute", "ui.bootstrap"]).config(function ($routeProvider, $httpProvider) {
    $routeProvider.when("/home", {
        templateUrl: "view/home.html",
        controller: "HomeController"
    })
    .when("/brokers", {
        templateUrl: "view/brokers.html",
        controller: "BrokersController"
    })
    .when("/nodes", {
        templateUrl: "view/nodes.html",
        controller: "NodesController"
    })
    .when("/sensors", {
        templateUrl: "view/sensors.html",
        controller: "SensorsController"
    })
    .when("/sensorData", {
        templateUrl: "view/sensorData.html",
        controller: "SensorDataController"
    })
    .when("/places", {
        templateUrl: "view/places.html",
        controller: "PlacesController"
    })
    .when("/receivedMessages", {
        templateUrl: "view/receivedMessages.html",
        controller: "MessagesController"
    })
    .when("/sendMessages", {
        templateUrl: "view/sendMessages.html",
        controller: "MessagesController"
    })
    .when("/dictionary", {
        templateUrl: "view/dictionaries.html",
        controller: "DictionariesController"
    })
    .when("/dictionary/:code", {
        templateUrl: "view/dictionaryDetails.html",
        controller: "DictionaryDetailsController"
    })
    .otherwise({
        redirectTo: "/home"
    });

    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.interceptors.push('errorHttpInterceptor');
    $httpProvider.interceptors.push('requestInterceptor');
});

angular.element(function(){
    angular.bootstrap(document, ['mqttDashboard']);
});

app.run(function($rootScope, alertsService) {
    $rootScope.$on("$locationChangeStart", function(event, next, current) {
        alertsService.clearAlerts();
    });
});