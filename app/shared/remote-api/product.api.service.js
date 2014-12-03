define(['angular', 'lodash'], function (angular, _) {
    function ProductAPIService($http, $q) {
        return {
            getList: function() {
                return $http.get('data/data.json');
            },
            getById: function(id) {
                var defer = $q.defer(),
                    product;
                $http.get('data/data.json').success(function (result) {
                    product = _.find(result, function (p) {
                        return p.pid === id;
                    });
                    defer.resolve(product);
                });
                return defer.promise;
            }
        }
    }

    ProductAPIService.$inject = ['$http', '$q'];

    return ProductAPIService;
});

