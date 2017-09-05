app.controller("depositoController", function($scope,$http) {
	
	
	
	$scope.buscarDepositos = function(){
		if(table!=undefined){
			table.fnDestroy()
			table = undefined

		}
		
		$http.get("deposito/buscarTodos")
		.success(function(response){
			$scope.depositos = response;


		})
		.error(function(error){


		});
	}
	
	$scope.buscarDepositos();
	var table
	$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
		
		table = $('.dataTable').dataTable( {
		} );

	});
	
	
	$scope.cadastrarDeposito = function() {

		$scope.salvar = function(deposito){
			$http.post("deposito/salvar", deposito)
			.success(function(response){
				$('#modal_deposito').modal('hide')
				$('body').removeClass('modal-open');
				$('.modal-backdrop').remove();
				
				$scope.buscarDepositos()
			})
			.error(function(error){


			});
			
		}
		
	}
	
	
    
});