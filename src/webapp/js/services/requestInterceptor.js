// register the interceptor as a service
app.factory('requestInterceptor', function ($q) {
    return {
        'request': function (config) {
            if (typeof config.cache  === 'undefined') {
                config.url = "http://10.132.221.251:8080" + config.url;
            } else if (config.url.indexOf('no-cache') > -1) {
                config.cache.remove(config.url);
                config.cached = false;
            }
            return config || $q.when(config);
        }
    };
});