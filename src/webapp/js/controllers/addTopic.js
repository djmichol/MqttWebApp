app.controller("AddTopicController", function ($scope, $http, $uibModalInstance, brokerId, alertsService) {

    $scope.topics;
    $scope.callbacks;
    $scope.newTopic;

    $scope.init = function () {
        $http({
            method: 'GET',
            url: "/dictionary/TOPICS"
        }).then(function successCallback(response) {
            $scope.topics = response.data.dictionaryValues;
        });
        $http({
            method: 'GET',
            url: "/dictionary/CALLBACKS"
        }).then(function successCallback(response) {
            $scope.callbacks = response.data.dictionaryValues;
        });
    };

    $scope.addTopicToBroker = function (){
        var topic = $.trim($("#TopicSelect option:selected").text());
        var callback = $.trim($("#CallbackSelect option:selected").text());

        $http({
            method: 'POST',
            url: "/topics",
            data:{
                "brokerId": brokerId,
                "topic": topic,
                "topicCallback": callback
            }
        }).then(function successCallback(response) {
            $scope.newTopic = response.data;
            alertsService.addAlert("Add topic","Success!!!","alert-success");
            $uibModalInstance.close($scope.newTopic);
        });
    };

    $scope.ok = function () {
        $scope.addTopicToBroker();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

});