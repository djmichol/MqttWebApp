app.controller("AddTopicController", function ($scope, $http, $uibModalInstance, brokerId, alertsService) {

    $scope.topics;
    $scope.callbacks;


    $scope.init = function () {
        $http({
            method: 'GET',
            url: "http://10.132.221.251:8080/dictionary/TOPICS"
        }).then(function successCallback(response) {
            $scope.topics = response.data.dictionaryValues;
        });
        $http({
            method: 'GET',
            url: "http://10.132.221.251:8080/dictionary/CALLBACKS"
        }).then(function successCallback(response) {
            $scope.callbacks = response.data.dictionaryValues;
        });
    };

    $scope.addTopicToBroker = function (){
        var topic = $.trim($("#TopicSelect option:selected").text());
        var callback = $.trim($("#CallbackSelect option:selected").text());

        $http({
            method: 'POST',
            url: "http://10.132.221.251:8080/topics",
            data:{
                "brokerId": brokerId,
                "topic": topic,
                "topicCallback": callback
            }
        }).then(function successCallback(response) {
            //TODO odswierzyc broker
            alertsService.addAlert("Add topic",response.data.message,"alert-success");
        });
    }

    $scope.ok = function () {
        $scope.addTopicToBroker();
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

});