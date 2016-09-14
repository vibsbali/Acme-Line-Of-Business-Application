"use strict";

(function() {
    angular.module("common.services")
        .factory("productResource", ["$resource",
            function($resource) {

                function productResource() {
                    return $resource("/api/products/:productId");
                };

                return {
                    productResource: productResource
                };
            }
        ]);
}())