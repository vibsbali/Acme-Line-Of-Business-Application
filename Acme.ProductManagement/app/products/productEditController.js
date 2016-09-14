/**
 * Created by Deb on 8/26/2014.
 */
(function () {
    "use strict";

    angular.module("productManagement")
        //product will be injected using resolve
        .controller("ProductEditController", ["product", function (product) {
            var vm = this;

            vm.product = product;

            if (vm.product && vm.product.productId) {
                vm.title = "Edit: " + vm.product.productName;
            }
            else {
                vm.title = "New Product";
            }
        }]);
}());
