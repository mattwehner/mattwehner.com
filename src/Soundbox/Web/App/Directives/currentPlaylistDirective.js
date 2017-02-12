soundboxDirectives.directive('currentPlaylist', [
    function() {
        return {
            restrict: 'E',
            templateUrl: '/App/Directives/CurrentPlaylistDirective.html',
            scope: {
                collapse: '=',
                tracks: '=',
            },
            replace: true,
            controller: function ($scope, $timeout) {
                $scope.API = null;
                $scope.currentVideo = 0;

                $scope.config = {
                    sources: $scope.tracks[0],
                };

                $scope.onPlayerReady = function (api) {
                    $scope.API = api;
                };

                $scope.onCompleteVideo = function () {
                    
                };
                
                $scope.setVideo = function (index) {
                    $scope.API.stop();
                    $scope.currentVideo = index;
                    $scope.config.sources = $scope.tracks[index];
                    $timeout($scope.API.play.bind($scope.API), 100);
                };
            }
        }
    }
]);