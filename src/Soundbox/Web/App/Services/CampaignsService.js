soundboxServices.factory('CampaignsService', [
    '$resource',
    function ($resource) {
        return $resource('/api/campaigns/:id', { id: '@id' }, {
            get: {
                method: 'GET',
            }
        });
    }
]);