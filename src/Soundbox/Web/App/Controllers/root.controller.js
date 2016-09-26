soundboxControllers.controller('root.controller', [
    '$scope',
    'ControllerRequestService',
    'UserAccountService',
    'CampaignsService',
    function(
        $scope,
        ControllerRequestService,
        UserAccountService,
        CampaignsService
    ) {
        $scope.model = {
            player: {}
        };

        $scope.getCampaignsForPlayer = function() {
            ControllerRequestService.executePromise({
                func: CampaignsService.get,
                id: {
                    id: $scope.model.player.Id,
                },
                onSuccess: function(campaigns) {
                    $scope.model.player.Campaigns = [campaigns];
                },
                onFailure: function() {},
            }, $scope.model, 'getCampaigns');
        }

        $scope.getPlayer = function () {
            ControllerRequestService.executePromise({
                func: UserAccountService.getProfile,
                id: {
                    id: 'auserid'
                },
                onSuccess: function (profile) {
                    $scope.model.player = profile.Profile;
                    $scope.getCampaignsForPlayer();
                    //$scope.getCharactersForPlayer();
                    //$scope.getPlaylistsForPlayer();
                    //$scope.getSoundboardsForPlayer();
                },
                onFailure: function () {
                }
            }, $scope.model, 'getUserProfile');
        };
        $scope.getPlayer();
    }
]);