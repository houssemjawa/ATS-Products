var application= angular.module("productsApp",['angularSimplePagination']);
application.controller('productsCtrl',function($scope,$http){
var getProducts = function(){
  $http.get('/api/list').then(function(response){
    $scope.values=response.data;

  });
};
getProducts();
$scope.settings = {
    currentPage: 0,
    offset: 0,
    pageLimit: 20,
    pageLimits: ['10', '50', '100']
  };
  $scope.callback = function() {
              console.log('pagination changed...');
            }
});
