soundboxControllers.controller('currentlyPlaying.controller',
[
    '$scope',
    'ControllerRequestService',
    function(
        $scope,
        ControllerRequestService
    ) {
        $scope.model = {
            campaign: {},
            tabSections: {},
            pageElements: {
                expanded: false,
            }
        };
    }
]);