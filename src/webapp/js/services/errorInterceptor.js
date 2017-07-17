// register the interceptor as a service
app.factory('errorHttpInterceptor', function ($q, alertsService) {
    return {
        'responseError': function (rejection) {
            if (rejection.status === 400 || rejection.status === 412 ) {
                var data = rejection.data;
                alertsService.addAlert(data.message, data.errors, "alert-danger");
            }
            return $q.reject(rejection);
        }
    };
});