define(['angular', './product.edit.controller'], function (angular, ProductEditCtrl) {
    angular.module('app.page.product-edit', ['ngRoute', 'ngGrid'])
        .controller('ProductEditCtrl', ProductEditCtrl)
        .config(['$routeProvider', '$locationProvider', function ($routeProvider) {
            $routeProvider
                .when('/product-edit/:pid', {
                    templateUrl: 'app/product-edit/product.edit.html',
                    controller: 'ProductEditCtrl',
                    resolve: {
                        product: ['$route', 'ProductAPIService', function ($route, ProductAPIService) {
                            return ProductAPIService.getById($route.current.params.pid)
                        }]
                    }
                })
        }]);
});