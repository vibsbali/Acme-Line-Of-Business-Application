(function () {
    "use strict";

    angular.module("productManagement")
        //product will be injected using resolve
        .controller("ProductEditTagController", ["product", function (product) {
            var vm = this;

            vm.product = product;

            vm.addTags = function(tags) {
                if (tags) {
                    var array = tags.split(",");
                    vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
                    vm.newTags = "";
                } else {
                    alert("Please enter one or more tags separated by commas");
                }
            }

            vm.removeTag = function(idx) {
                vm.product.tags.splice(idx, 1);
            };
        }]);
}());
