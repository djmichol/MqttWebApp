app.controller("DictionariesController", function ($scope, $http, $location) {

    $scope.code;
    $scope.dictionaries;

    $scope.getAllDictionaries = function () {
        $http({
            method: 'GET',
            url: "http://10.132.221.251:8080/dictionary"
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
            url: "http://10.132.221.251:8080/dictionary/"+$scope.code
        }).then(function successCallback(response) {
            var dictionaries = [];
            dictionaries.push(response.data);
            $scope.dictionaries = dictionaries;
        });
    }
});