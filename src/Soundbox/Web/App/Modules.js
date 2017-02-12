var soundboxControllers = angular.module('soundboxControllers', []);

var soundboxServices = angular.module('soundboxServices',
[
    'ngResource'
]);

var soundboxRouting = angular.module('soundboxRouting',
[
    'ui.router'
]);

var soundboxDirectives = angular.module('soundboxDirectives', []);

var soundboxApp = angular.module('soundboxApp',
[
    'ngSanitize',
    'com.2fdevs.videogular',
			'com.2fdevs.videogular.plugins.controls',
  'info.vietnamcode.nampnq.videogular.plugins.youtube',
    'soundboxServices',
    'soundboxDirectives',
    'soundboxRouting',
    'soundboxControllers',
    'ui.bootstrap',
    'ngAnimate'
]);

soundboxApp.run([
    '$rootScope',
    '$state',
    '$stateParams',
    '$anchorScroll',
    function($rootScope, $state, $stateParams, $anchorScroll) {


        // Add these from ui-router so we can access the state/stateParams from any scope
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        // So we can add an offset to bookmarks so they sit below the navbar
        $anchorScroll.yOffset = 100;
    }
]);