"use strict";
(function () {
    var app = angular.module("productManagement", ["common.services", "productResourceMock", "ui.router"]);

    app.config([
        "$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "app/welcomeView.html"
                })
                .state("productList", {
                    url: "/products",
                    "templateUrl": "app/products/productListView.html",
                    controller: "ProductListController as vm"
                })
                .state("productDetail", {
                    //remember to add / after detail otherwise the forward slash will not appear in the browser address bar
                    url: "/products/detail/:productId",
                    "templateUrl": "app/products/productDetailView.html",
                    controller: "ProductDetailController as vm"
                })
                .state("productEdit", {
                    url: "/products/edit/:productId",
                    "templateUrl": "app/products/productEditView.html",
                    controller: "ProductEditController as vm"
                });
        }
    ]);
}());