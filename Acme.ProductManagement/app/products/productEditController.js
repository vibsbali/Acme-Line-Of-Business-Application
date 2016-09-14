(function () {
    "use strict";

    angular.module("productManagement")
        //product will be injected using resolve
        .controller("ProductEditController", ["product", "$state", "productService", function (product, $state, productService) {
            var vm = this;

            vm.product = product;
            vm.priceOption = "percent";

            vm.marginPercent = function () {
                return productService.calculateMarginPercent(vm.product.price, vm.product.cost);
            };

            /* Calculate the price based on a markup */
            vm.calculatePrice = function () {
                var price = 0;

                if (vm.priceOption == 'amount') {
                    price = productService.calculatePriceFromMarkupAmount(
                        vm.product.cost, vm.markupAmount);
                }

                if (vm.priceOption == 'percent') {
                    price = productService.calculatePriceFromMarkupPercent(
                        vm.product.cost, vm.markupPercent);
                }
                vm.product.price = price;
            };

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

            //note how we call $save on the product itself
            vm.submit = function () {
                vm.product.$save(function (data) {
                    toastr.success("Saved");
                }, function (error) {
                    toastr.error("oops.. " + error.statusText);
                });
            }

            //we use $stateProvider to go to a different view programatically
            vm.cancel = function () {
                $state.go("productList");
            }
        }]);
}());
