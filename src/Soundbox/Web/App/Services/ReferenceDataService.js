hourfleetServices.factory('ReferenceDataService', [
    '$http',
    '$filter',
    '$location',
    function (
        $http,
        $filter,
        $location
    ) {
        return {
            captchaPublicKey: '6LfZnRETAAAAAIFSnt9T4gRyItrqOPp__wr5moYp',
            minimumBookingDuration: moment.duration(30, 'minutes'),
            poi: {
                centerGeofence: {
                    // New Zealand
                    latitude: -41.5766,
                    longitude: 173.0699,
                    zoom: 6
                    // NYC
                    //latitude: 40.7314123,
                    //longitude: -73.99698479999999,
                    //zoom: 14
                    // Oslo
                    //latitude: 59.9138688,
                    //longitude: 10.7522454,
                    //zoom: 14
                }
            }
        };
    }
]);