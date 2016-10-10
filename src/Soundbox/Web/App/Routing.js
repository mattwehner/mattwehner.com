soundboxRouting.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function(
        $stateProvider,
        $urlRouterProvider,
        $locationProvider
    ) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $urlRouterProvider.otherwise('/');
        $urlRouterProvider.when('/campaign/:campaignId', '/campaign/:campaignId/home');

        $stateProvider
            .state('root', {
                url: '',
                template: '<ui-view/>',
                "abstract": true
            })
            .state('home', {
                parent: 'root',
                url: '/',
                templateUrl: '/Partials/Home/Home',
                data: {
                    title: 'Home'
                }
            })
            .state('about', {
                parent: 'root',
                url: '/about',
                templateUrl: '/Partials/Home/About',
                data: {
                    title: 'About'
                },
            })
            .state('campaigns', {
                parent: 'root',
                "abstract": true,
                url: '/campaign',
                template: '<ui-view>',
            })
            .state('campaigns.campaign', {
                url: '/:campaignId',
                templateUrl: '/Partials/Home/Campaign',
                data: {
                    title: 'View Campaign'
                },
            })
            .state('campaigns.campaign.home', {
                url: '/home',
                templateUrl: '/Partials/Home/CampaignHome',
                data: {
                    title: 'View Campaign'
                },
            })
            .state('campaigns.campaign.character', {
                url: '/character/:characterId',
                templateUrl: '/Partials/Home/Character',
                data: {
                    title: 'View Character'
                },
            })
            .state('campaigns.campaign.playlist', {
                url: '/playlist/:playlistId',
                templateUrl: '/Partials/Home/Playlist',
                data: {
                    title: 'View Playlist'
                },
            })
            .state('campaigns.campaign.soundboard', {
                url: '/soundboard/:soundboardId',
                templateUrl: '/Partials/Home/Soundboard',
                data: {
                    title: 'View Soundboard'
                },
            });
    }
]);