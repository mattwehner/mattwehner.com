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
                onSuccess: function(campaign) {
                    $scope.model.campaigns = ($scope.model.campaigns)?$scope.model.campaigns:[];
                    $scope.model.campaigns.push(campaign);
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