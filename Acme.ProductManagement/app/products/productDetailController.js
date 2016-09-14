"use strict";
(function () {
    angular.module("productManagement")
        //product is injected via resolve property via resolve in app.js
        .controller("ProductDetailController",["product", function(product) {
            var vm = this;

            vm.product = product;

            vm.title = "Product Detail : " + vm.product.productName;

            //vm.product.tags is an array and calling to list will 
            //conver the array to a comma separated list
            if (vm.product.tags) {
                vm.product.tagList = vm.product.tags.toString();
            }
        }]);
}())