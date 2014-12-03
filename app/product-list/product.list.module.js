define(['angular', './product.list.controller', '../shared/remote-api/remote.api.module'], function (angular, ProductListCtrl) {
    angular.module('app.page.product-list', ['ngRoute', 'ngGrid', 'app.shared.remote-api'])
        .controller('ProductListCtrl', ProductListCtrl)
        .config(['$routeProvider', '$locationProvider', function ($routeProvider) {
            $routeProvider
                .when('/product-list', {
                    templateUrl: 'app/product-list/product.list.html',
                    controller: 'ProductListCtrl'
                })
        }]);
});