var application= angular.module("productsApp",[]);
application.controller('productsCtrl',function($scope,$http){
var getProducts = function(){
  $http.get('/api/list').then(function(response){
    $scope.values=response.data;

  });
};
getProducts();
	
});
