soundboxServices.service('ControllerRequestService', [
    '$parse',
    function (
        $parse
    ) {

        this.executePromise = function (promise, model, name) {

            model.errors = model.errors || {};
            model.busies = model.busies || {};

            var parser = $parse(name);
            parser.assign(model.errors, false);
            parser.assign(model.busies, false);

            if (!promise.func) {
                return;
            }

            function onSuccessHandler(response) {

                if (promise.onSuccess) {
                    promise.onSuccess(response);
                }

                parser.assign(model.busies, false);
                parser.assign(model.errors, false);
            }

            function onFailureHandler(response) {

                if (promise.onFailure) {
                    promise.onFailure(response);
                }

                parser.assign(model.busies, false);
                parser.assign(model.errors, true);
            }

            parser.assign(model.busies, true);

            if (promise.params) {
                if (promise.id) {
                    promise.func(promise.id, promise.params, onSuccessHandler, onFailureHandler);
                } else {
                    promise.func(promise.params, onSuccessHandler, onFailureHandler);
                }
            } else {
                if (promise.id) {
                    promise.func(promise.id, onSuccessHandler, onFailureHandler);
                } else {
                    promise.func(onSuccessHandler, onFailureHandler);
                }
            }

        };
    }
]);