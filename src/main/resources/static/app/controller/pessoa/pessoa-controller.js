app.controller("pessoaController", function($scope,$http) {
	
	
	
	$scope.buscarPessoa = function(){
		if(table!=undefined){
			table.fnDestroy()
			table = undefined

		}
		
		$http.get("pessoa/buscarTodos")
		.success(function(response){
			$scope.produtos = response;


		})
		.error(function(error){


		});
	}
	
	$scope.buscarPessoa();
	var table
	$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
		
		table = $('.dataTable').dataTable( {
		} );

	});
	
	
	$scope.cadastrarPessoa = function() {

		$scope.salvar = function(produto){
			$http.post("pessoa/salvar", produto)
			.success(function(response){
				$('#modal_pessoa').modal('hide')
				$('body').removeClass('modal-open');
				$('.modal-backdrop').remove();
				
				$scope.buscarPessoa()
			})
			.error(function(error){


			});
			
		}
		
	}
	
	
    
});