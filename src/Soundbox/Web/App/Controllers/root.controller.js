soundboxControllers.controller("root.controller", [
    "$scope",
    "$state",
    function(
        $scope,
        $state) {
        $scope.model = {

        };
        $scope.search = function() {
            $state.go('about');
        };
    }
]);