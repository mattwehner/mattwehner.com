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