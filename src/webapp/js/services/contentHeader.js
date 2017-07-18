app.factory('contentHeader', function ($rootScope) {

    function setHeader(header, description) {
        this.header = header;
        this.description = description;
        var data = {
            header: this.header,
            description: this.description
        };
        $rootScope.$broadcast('pageHeader:updated', data);
    }

    return {
        setHeader: setHeader
    }
});