define(['angular'], function (angular) {
    function ProductListCtrl($scope, ProductAPIService) {
        var cellEditTemplate = "<a href='#product-edit/{{row.entity.pid}}' class='btn btn-success'>Edit</a>",
            cellDeleteTemplate = "<a href='#productEdit' class='btn btn-danger'>Delete</a>";

        $scope.filterText = '';
        $scope.filterOptions = {filterText: '', useExternalFilter: false};
        $scope.isGrid = true;

        $scope.gridOptions = {
            data : 'myData',
            rowHeight: 40,
            columnDefs: [
                {field: 'pid', displayName: 'Product ID'},
                {field: 'p_name', displayName:'Product Name'},
                {field: 'p_code', displayName:'Product Code'},
                {field: 'editHref', displayName: 'Edit', enableCellEdit: false, cellTemplate: cellEditTemplate},
                {field: 'deleteHref', displayName: 'Delete', enableCellEdit: false, cellTemplate: cellDeleteTemplate}
            ],
            filterOptions: $scope.filterOptions,
            showFilter: false
        };

        $scope.showType = function(){
            $scope.isGrid = !$scope.isGrid;
        }

        ProductAPIService.getList().success(function(data){
            if(data) {
                $scope.myData = data;
            }
        });
    }

    ProductListCtrl.$inject = ['$scope', 'ProductAPIService'];

    return ProductListCtrl;
});

