soundboxControllers.controller('dashboard.controller', [
    '$scope',
    'ControllerRequestService',
    'UserAccountService',
    'CampaignsService',
    'CharactersService',
    'PlaylistsService',
    'SoundboardsService',
    function(
        $scope,
        ControllerRequestService,
        UserAccountService,
        CampaignsService,
        PlaylistsService,
        CharactersService,
        SoundboardsService
    ) {
        $scope.model = {
            player: {}
        };

        $scope.getCampaigns = function() {
            ControllerRequestService.executePromise({
                func: CampaignsService.query,
                onSuccess: function (campaigns) {
                    $scope.model.campaigns = campaigns;
                },
                onFailure: function() {},
            }, $scope.model, 'getCampaigns');
        }

        $scope.getCharacters = function() {
            ControllerRequestService.executePromise({
                func: CharactersService.query,
                onSuccess: function (characters) {
                    $scope.model.characters = characters;
                },
                onFailure: function() {},
            }, $scope.model, 'getCharacters');
        }

        $scope.getPlaylists = function() {
            ControllerRequestService.executePromise({
                func: PlaylistsService.query,
                onSuccess: function (playlists) {
                    $scope.model.playlists = playlists;
                },
                onFailure: function() {},
            }, $scope.model, 'getPlaylists');
        }

        $scope.getSoundboards = function() {
            ControllerRequestService.executePromise({
                func: SoundboardsService.query,
                onSuccess: function (soundboards) {
                    $scope.model.soundboards = soundboards;
                },
                onFailure: function() {},
            }, $scope.model, 'getSoundboards');
        }

        $scope.getPlayer = function () {
            ControllerRequestService.executePromise({
                func: UserAccountService.getProfile,
                id: {
                    id: 'auserid'
                },
                onSuccess: function (profile) {
                    $scope.model.player = profile.Profile;
                    $scope.getCampaigns();
                    $scope.getCharacters();
                    $scope.getPlaylists();
                    $scope.getSoundboards();
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