(function () {
    "use strict";

    angular.module("productManagement")
        //product will be injected using resolve
        .controller("ProductEditController", ["product","$state", function (product, $state) {
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

            //note how we call $save on the product itself
            vm.submit = function() {
                vm.product.$save(function(data) {
                    toastr.success("Saved");
                }, function(error) {
                    toastr.error("oops.. " + error.statusText);
                });
            }

            //we use $stateProvider to go to a different view programatically
            vm.cancel = function() {
                $state.go("productList");
            }
        }]);
}());
