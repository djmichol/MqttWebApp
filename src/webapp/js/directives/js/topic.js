app.directive("topicDirective", function () {
    return {
        restrict: 'E',
        templateUrl: "view/topic.html",
        controller: "TopicsController",
        scope: {
            topics: '=topics'
        }
    };
});