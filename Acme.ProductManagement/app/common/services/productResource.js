"use strict";

(function () {
    angular.module("common.services")
        .factory("productResource", function ($resource) {

            //we initialize $resource service with an appropriate backend;
            var backend = $resource("/api/products/:productId");

            //create a factory object
            var factory = {};

            //add a method getProducts
            factory.getProducts = function() {
                //Notice query requires $resource to be initialized with an endpoint
                //Also notice that we are returning query object and controller will be calling it
                return backend.query;
            };

            return factory;
        });
}());