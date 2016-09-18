soundboxControllers.controller("root.controller", [
    "$scope",
    function(
        $scope) {
        $scope.model = {

        };
        $scope.search = function() {
            alert($scope.model.search);
        };
    }
]);