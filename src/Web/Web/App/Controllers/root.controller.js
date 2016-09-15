mattwehnerControllers.controller("root.controller", [
    "$scope",
    function(
        $scope) {
        $scope.model = {
        }

        $scope.submit = function() {
            alert($scope.model.search);
        }
    }
]);