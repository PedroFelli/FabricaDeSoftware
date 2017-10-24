app.controller("inicioController", function($scope, $http,  $timeout, $location, $routeParams , $window) {

	
	
	$http.get("produto/buscarTodos")
	.success(function(response){
		$scope.produtos = response;

	})
	.error(function(error){


	});
	
	

});