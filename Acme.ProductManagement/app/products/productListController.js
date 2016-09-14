"use strict";
(function() {
    angular.module("productManagement")
        .controller("ProductListController", ["productResource", function (productResource) {
            var vm = this;

           // vm.products = [
           //{
           //    ' productId': 1,
           //    'productName': 'Leaf Rake',
           //    'productCode': 'GDN-0011',
           //    'releaseDate': 'March 19, 2009',
           //    'description': 'Leaf rake with 48-inch handle.',
           //    'cost': 9.00,
           //    'price': 19.95,
           //    'category': 'garden',
           //    'tags': ['leaf', 'tool'],
           //    'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
           //},
           //{
           //    'productId': 5,
           //    'productName': 'Hammer',
           //    'productCode': 'TBX-0048',
           //    'releaseDate': 'May 21, 2013',
           //    'description': 'Curved claw steel hammer',
           //    'cost': 1.00,
           //    'price': 8.99,
           //    'category': 'toolbox',
           //    'tags': ['tool'],
           //    'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
            //}];

            console.log(productResource);

            productResource.getProducts(function(data) {
                vm.products = data;
            }, function (error) {
                console.log(error);
                vm.errorMessage = error;
            });

            vm.showImage = false;

            vm.toggleImage = function () {
                vm.showImage = !vm.showImage;
            };
        }]);
}());