define(['angular'], function (angular) {
    function ProductAddEditCtrl($scope, product) {
        $scope.message = 'Edit Product';
        $scope.data = [];
        $scope.product = product;
    }

    ProductAddEditCtrl.$inject = ['$scope', 'product'];

    return ProductAddEditCtrl;
});

