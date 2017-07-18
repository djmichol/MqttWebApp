app.controller("DictionaryDetailsController", function ($scope, $http,$routeParams, contentHeader) {

    $scope.value;
    $scope.dictionary;

    contentHeader.setHeader("Dictionary details", "Details of "+$routeParams.code+" dictionary");

    $scope.getDictionaryByCode = function () {
        var code = $routeParams.code;
        $http({
            method: 'GET',
            url: "http://10.132.221.251:8080/dictionary/"+code
        }).then(function successCallback(response) {
            $scope.dictionary = response.data;
        });
    };

    $scope.addValue = function(){
        $http({
            method: 'POST',
            url: "http://10.132.221.251:8080/dictionary/value",
            data:{
                dictionaryCode:$scope.dictionary.dictionaryCode,
                value: $scope.value
            }
        }).then(function successCallback(response) {
            $scope.dictionary.dictionaryValues.push(response.data.data);
        });
    }
});