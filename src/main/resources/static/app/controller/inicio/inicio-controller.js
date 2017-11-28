app.controller("inicioController", function($scope, $http,  $timeout, $location, $routeParams , $window) {

	$scope.removerEstoque = function(produto){
		swal({
			  title: "Notificar saída do produto no estoque",
			  text: "Número de saídas: " + produto.nome ,
			  type: "input",
			  showCancelButton: true,
			  closeOnConfirm: false,
			  inputPlaceholder: "Quantidade"
			}, function (inputValue) {
			  if (inputValue === false) return false;
			  if (inputValue === "") {
			    swal.showInputError("É necessário informar uma quantidade!");
			    return false
			  }
			  var filtro = {produto: produto.id, quantidade: parseInt(inputValue)}
			  $http.post("produto/remover", filtro)
				.success(function(response){
					if(response){
						  swal("Foi removido: " + inputValue + " unidades no estoque para o produto: " + produto.nome);
						  $scope.buscar();
					} else {
						  swal("Não é possível remover quantidade de produtos indisponíveis no estoque!");

					}
				})
				.error(function(error){
					swal("Ops! Houve um erro na remoção! Verifique a quantidade informada.");
					
				});
				
			  });
	}
	
	$scope.adicionarEstoque = function(produto){
		swal({
			  title: "Notificar entrada do produto no estoque",
			  text: "Número de entradas: " + produto.nome ,
			  type: "input",
			  showCancelButton: true,
			  closeOnConfirm: false,
			  inputPlaceholder: "Quantidade"
			}, function (inputValue) {
			  if (inputValue === false) return false;
			  if (inputValue === "") {
			    swal.showInputError("É necessário informar uma quantidade!");
			    return false
			  }
			  
			  var filtro = {produto: produto.id, quantidade: parseInt(inputValue)}
			  $http.post("produto/adicionar", filtro)
				.success(function(response){
					if(response){
						  swal("Foi adicionado: " + inputValue + " unidades no estoque para o produto: " + produto.nome);
						  $scope.buscar();
					} else {
						  swal("Ops! Houve um erro na inserção");

					}
				})
				.error(function(error){
					swal("Ops! Houve um erro na inserção! Verifique a quantidade informada.");
					
				});
				
			  });
	}
	
	
	$scope.buscar = function(){
		$http.get("produto/buscarTodos")
		.success(function(response){
			$scope.produtos = response;

		})
		.error(function(error){


		});
	}
	
	
	
	$scope.buscar();

});