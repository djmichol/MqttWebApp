app.controller("TopicsController", function ($scope, $http, alertsService) {

    $scope.topics;

    $scope.subscribe = function (brokerId, topic) {
        $http({
            method: 'POST',
            url: 'http://10.132.221.251:8080/topics/subscribe',
            data: {
                "brokerId": brokerId,
                "topic": topic
            }
        }).then(function successCallback(response) {
            changeSubStatus(brokerId, topic, true);
            alertsService.addAlert("Connect to broker", response.data,"alert-success");
        });
    };

    $scope.unsubscribe = function (brokerId, topic) {
        $http({
            method: 'POST',
            url: 'http://10.132.221.251:8080/topics/unsubscribe',
            data: {
                "brokerId": brokerId,
                "topic": topic
            }
        }).then(function successCallback(response) {
            changeSubStatus(brokerId, topic, false);
            alertsService.addAlert("Disconnect to broker",response.data,"alert-success");
        });
    };

    function changeSubStatus(brokerId, topic, subscribed){
        var changedItem = $scope.topics.filter(function(item) {
            return item.brokerId === brokerId && item.topic === topic;
        })[0];
        changedItem.subscribed = subscribed;
    }

});