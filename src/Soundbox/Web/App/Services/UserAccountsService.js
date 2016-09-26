soundboxServices.factory('UserAccountService', [
    '$resource',
    function ($resource) {
        return $resource('/api/users/:id', { id: '@id' }, {
            getProfile: {
                url: '/api/users/:id/profile',
                method: 'GET',
            }
        });
    }
]);