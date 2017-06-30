app.service('alertsService', function () {
    var alerts = [];

    this.addAlert = function (message, alertClass) {
        var alert = {
            "message": message,
            "alertClass": alertClass
        };
        alerts.push(alert);
        notifyObservers();
    };

    this.removeAlert = function (alert) {
        var idx = alerts.indexOf(alert);
        if (idx !== -1) {
            alerts.splice(idx, 1);
            notifyObservers();
        }
    };

    this.getAlerts = function () {
        return alerts;
    };

    var observerCallbacks = [];
    this.registerObserverCallback = function (callback) {
        observerCallbacks.push(callback);
    };
    var notifyObservers = function () {
        angular.forEach(observerCallbacks, function (callback) {
            callback();
        });
    };
});