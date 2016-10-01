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
                template: '<ui-view/>',
            })
            .state('campaigns.campaign', {
                url: '/:campaignId',
                templateUrl: '/Partials/Home/Campaign',
                data: {
                    title: 'View Campaign'
                },
            });
    }
]);