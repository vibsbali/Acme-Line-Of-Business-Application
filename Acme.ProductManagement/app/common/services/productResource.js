"use strict";

(function () {
    angular.module("common.services")
        .factory("productResource", function ($resource) {
            //Note that for $resource we do not create a factory object and add methods to it.
            //We simply return the $resource service and let controller handle the methods.. 
            return $resource("/api/products/:productId");
        });
}());