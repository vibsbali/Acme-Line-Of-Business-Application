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

            //$event is the original event object
            //We first stop any default event to happen by stating $event.preventDefault()
            vm.open = function ($event) {
                console.log($event);
                $event.preventDefault();
                $event.stopPropagation();

                vm.opened = !vm.opened;
                console.log(vm.opened);
            };
        }]);
}());
