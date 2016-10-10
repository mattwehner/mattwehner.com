soundboxDirectives.directive('sidebar', [
    function() {
        return {
            restrict: 'E',
            templateUrl: '/App/Directives/SidebarDirective.html',
            transclude: true,
            link: function(scope, element) {
                scope.model = scope.model || {};
            }
        }
    }
]);

soundboxDirectives.directive('sidebarSection', [
    function() {
        return {
            restrict: 'E',
            templateUrl: '/App/Directives/SidebarSectionDirective.html',
            replace: true,
            link: function(scope, element, attrs) {
                scope.items = scope.$eval(attrs.items);
                scope.model = scope.model || {};
            }
        }
    }
]);