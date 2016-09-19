var soundboxApp = angular.module("soundboxApp", [
    "soundboxControllers",
    "soundboxRouting",
    "soundboxServices"
]);

var soundboxControllers = angular.module("soundboxControllers", []);
var soundboxServices = angular.module("soundboxServices", []);
var soundboxRouting = angular.module("soundboxRouting", [
    "ui.router"
]);

soundboxApp.run([
    '$rootScope',
    '$state',
    '$stateParams',
    '$anchorScroll',
    function ($rootScope, $state, $stateParams, $anchorScroll) {


        // Add these from ui-router so we can access the state/stateParams from any scope
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        // So we can add an offset to bookmarks so they sit below the navbar
        $anchorScroll.yOffset = 100;
    }
]);