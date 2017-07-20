app.controller("DictionariesController", function ($scope, $http, $location, contentHeader) {

    $scope.code;
    $scope.dictionaries;

    contentHeader.setHeader("Dictionaries", "Dictionaries to keep data");

    $scope.getAllDictionaries = function () {
        $http({
            method: 'GET',
            url: "/dictionary"
        }).then(function successCallback(response) {
            $scope.dictionaries = response.data;
        });
    };

    $scope.goToDictionaryDetails = function (code) {
        $location.path("/dictionary/"+code);
    };

    $scope.search = function(){
        $http({
            method: 'GET',
            url: "/dictionary/"+$scope.code
        }).then(function successCallback(response) {
            var dictionaries = [];
            dictionaries.push(response.data);
            $scope.dictionaries = dictionaries;
        });
    }
});