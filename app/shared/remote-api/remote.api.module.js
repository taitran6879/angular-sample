define(['angular', './product.api.service'], function (angular, ProductAPIService) {
    angular.module('app.shared.remote-api', [])
        .factory('ProductAPIService', ProductAPIService)
});