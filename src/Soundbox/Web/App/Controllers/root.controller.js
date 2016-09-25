soundboxControllers.controller("root.controller", [
    "$scope",
    "ControllerRequestService",
    "UserAccountService",
    function(
        $scope,
        ControllerRequestService,
        UserAccountService
    ) {
        $scope.model = {
            player: {}
        };

        $scope.getPlayer = function() {
            ControllerRequestService.executePromise({
                func: UserAccountService.getProfile,
                id: {
                    id: 'auserid'
                },
                onSuccess: function(value) {
                },
                onFailure: function() {
                }
            }, $scope.model, 'getUserProfile');
        };
        $scope.getPlayer();
    }
]);