define([
    'angular',
    'product-edit/product.edit.module',
    'product-list/product.list.module'
], function (angular) {
    var modules = [
        'ngRoute',
        'app.page.product-edit',
        'app.page.product-list'
    ];
    angular.module('app', modules)
        .config(['$routeProvider', '$locationProvider', function ($routeProvider) {
            $routeProvider
                .otherwise({
                    redirectTo: '/product-list'
                })
        }]);
});