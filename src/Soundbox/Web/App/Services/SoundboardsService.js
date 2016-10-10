soundboxServices.factory('SoundboardsService', [
    '$resource',
    function ($resource) {

        function unWrapResponse(data, elementName, isArray) {
            if (data.length > 0) {
                try {
                    var obj = angular.fromJson(data);
                    if (!obj.ResponseStatus) {
                        var items = obj[elementName];
                        if (items) {
                            return items;
                        }
                    }
                } catch (e) {
                    return {};
                }
            }

            return isArray ? [] : {};
        }

        return $resource('/api/soundboards/:id', { id: '@id' }, {
            query: {
                method: 'GET',
                isArray: true,
                transformResponse: function (data) {
                    return unWrapResponse(data, 'Soundboards', true);
                },
            },
            get: {
                method: 'GET',
                isArray: false,
                transformResponse: function (data) {
                    return unWrapResponse(data, 'Soundboard', false);
                },
            }
        });
    }
]);