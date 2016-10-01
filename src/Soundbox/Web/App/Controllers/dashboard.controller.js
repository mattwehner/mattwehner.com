soundboxControllers.controller('dashboard.controller', [
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
                func: CampaignsService.query,
                onSuccess: function (campaigns) {
                    $scope.model.campaigns = campaigns;
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
                },
                onFailure: function () {
                }
            }, $scope.model, 'getUserProfile');
        };
        $scope.getPlayer();

        $scope.returnBackgroundImage = function(imageUrl) {
            var gradientValue = 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(';
            return {
                'background-image': gradientValue + imageUrl + ')',
            }
        }
    }
]);