app.controller("TopicsController", function ($scope, $http, alertsService) {

    $scope.topics;

    $scope.subscribe = function (brokerId, topic, callback) {
        $http({
            method: 'POST',
            url: 'http://10.132.221.251:8080/topics/subscribe',
            data: {
                "brokerId": brokerId,
                "topic": topic,
                "topicCallback": callback
            }
        }).then(function successCallback(response) {
            changeSubStatus(brokerId, topic, true);
            alertsService.addAlert("Connect to broker", response.data,"alert-success");
        });
    };

    $scope.unsubscribe = function (brokerId, topic, callback) {
        $http({
            method: 'POST',
            url: 'http://10.132.221.251:8080/topics/unsubscribe',
            data: {
                "brokerId": brokerId,
                "topic": topic,
                "topicCallback": callback
            }
        }).then(function successCallback(response) {
            changeSubStatus(brokerId, topic, false);
            alertsService.addAlert("Disconnect to broker",response.data,"alert-success");
        });
    };

    function changeSubStatus(brokerId, topic, callback, subscribed){
        var changedItem = $scope.topics.filter(function(item) {
            return item.brokerId === brokerId && item.topic === topic && item.topicCallback === callback;
        })[0];
        changedItem.subscribed = subscribed;
    }

    $scope.removeTopic = function (brokerId, topic, callback) {
        $http({
            method: 'DELETE',
            url: 'http://10.132.221.251:8080/topics',
            data: {
                "brokerId": brokerId,
                "topic": topic,
                "topicCallback": callback
            },
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        }).then(function successCallback(response) {
            var removedItem = $scope.topics.filter(function(item) {
                return item.brokerId === brokerId && item.topic === topic && item.topicCallback === callback;
            })[0];
            var index = $scope.topics.indexOf(removedItem);
            if (index > -1) {
                $scope.topics.splice(index, 1);
            }
            alertsService.addAlert("Remove topic",response.data.message,"alert-success");
        });
    };

});