app.controller("produtoController", function($scope,$http) {
	
	
	$scope.limparProduto = function () {
		$scope.produto = {
				id: undefined,
				nome: undefined,
				preco: undefined,
				descricao: undefined
		}
	}
	
	
	$scope.buscarProdutos = function(){

		$http.get("produto/buscarTodos")
		.success(function(response){
			$scope.produtos = response;


		})
		.error(function(error){


		});
	}
	
	$scope.buscarProdutos();
	
	
	$scope.cadastrarProduto = function() {
		$scope.limparProduto();
		$scope.salvar = function(produto){
			$http.post("produto/salvar", produto)
			.success(function(response){
				$('#modal_produto').modal('hide')
				$('body').removeClass('modal-open');
				$('.modal-backdrop').remove();
				
				$scope.buscarProdutos()
			})
			.error(function(error){
				
			});
		}
		
	}
	
	$scope.alterarProduto = function (id){
		$http.get("produto/buscar/" + id)
		.success(function(response){
			$scope.produto = response;
		})
		.error(function(error){

		});
		
		$scope.salvar = function(produto){
			$http.post("produto/atualizar", produto)
			.success(function(response){
				$('#modal_produto').modal('hide')
				$('body').removeClass('modal-open');
				$('.modal-backdrop').remove();
				
				$scope.buscarProdutos()
			})
			.error(function(error){
				
			});
		}
		
	}
	
	$scope.deletarProduto = function (id){
		$http.delete("produto/deletar/" + id)
		.success(function(response){
			$scope.buscarProdutos();
 		})
		.error(function(error){

		});
	}
	
	
	
    
});