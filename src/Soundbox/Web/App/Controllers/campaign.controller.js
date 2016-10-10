soundboxControllers.controller('campaign.controller',
[
    '$scope',
    'ControllerRequestService',
    'CampaignsService',
    function(
        $scope,
        ControllerRequestService,
        CampaignsService
    ) {
        $scope.model = {
            campaign: {},
            tabSections: {},
            pageElements: {
                selectedTab: $scope.$stateParams.characterId,
            }
        };

        $scope.getCampaign = function() {
            ControllerRequestService.executePromise({
                    func: CampaignsService.get,
                    id: {
                        id: $scope.$stateParams.campaignId,
                    },
                    onSuccess: function(campaign) {
                        $scope.model.campaign = campaign;
                    },
                    onFailure: function() {},
                },
                $scope.model,
                'getCampaign');
        };
        $scope.getCampaign();
    }
]);