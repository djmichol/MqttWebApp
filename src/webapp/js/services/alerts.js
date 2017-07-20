app.service('alertsService', function ($timeout) {
    var alerts = [];

    this.addAlert = function (title, message, alertClass) {
        var alert = {
            "title": title,
            "message": message,
            "alertClass": alertClass
        };
        alerts.push(alert);
        $timeout(function () {
            removeAlert(alert);
        }, 5000);
        notifyObservers();
    };

    this.removeAlert = function (alert) {
        removeAlert(alert);
    };

    var removeAlert = function (alert) {
        var idx = alerts.indexOf(alert);
        if (idx !== -1) {
            alerts.splice(idx, 1);
            notifyObservers();
        }
    };
    this.clearAlerts = function () {
        alerts = [];
        notifyObservers();
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