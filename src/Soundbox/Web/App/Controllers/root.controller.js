soundboxControllers.controller('root.controller', [
    '$scope',
    function(
        $scope
    ) {
        $scope.model = {
            pageElements: {
                currentlyPlayingExpanded: false,
            }
        };
    }
]);