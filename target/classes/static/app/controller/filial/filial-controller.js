app.controller("filialController", function($scope,$http) {
	
	
	$scope.limparFilial = function () {
		$scope.filial = {
				id: undefined,
				nome: undefined,
				endereco: undefined,
				empresa: {}
		}
	}

	
	$scope.buscarFilial = function(){
		$scope.limparFilial();
		if(table!= undefined){
			table.fnDestroy();
		}
		
		$http.get("filial/buscarTodos")
		.success(function(response){
			$scope.filiais = response;


		})
		.error(function(error){


		});
		
		$http.get("empresa/buscarTodos")
		.success(function(response){
			$scope.empresas = response;

		})
		.error(function(error){


		});
	}
	
	$scope.buscarFilial();
	var table
	$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
		
		initTable1();

	});
	
	  var initTable1 = function () {

	        table = $('#sample_1');

	        // begin first table
	        table.dataTable({

	            // Internationalisation. For more info refer to http://datatables.net/manual/i18n
	            "language": {
	                "aria": {
	                    "sortAscending": ": activate to sort column ascending",
	                    "sortDescending": ": activate to sort column descending"
	                },
	                "emptyTable": "No data available in table",
	                "info": "Showing _START_ to _END_ of _TOTAL_ records",
	                "infoEmpty": "No records found",
	                "infoFiltered": "(filtered1 from _MAX_ total records)",
	                "lengthMenu": "Show _MENU_",
	                "search": "Search:",
	                "zeroRecords": "No matching records found",
	                "paginate": {
	                    "previous":"Anterior",
	                    "next": "Próximo",
	                    "last": "Último",
	                    "first": "Primeiro"
	                }
	            },

	            // Or you can use remote translation file
	            //"language": {
	            //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
	            //},

	            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
	            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js). 
	            // So when dropdowns used the scrollable div should be removed. 
	            //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

	            "bStateSave": false, // save datatable state(pagination, sort, etc) in cookie.

	            "pageLength": 5,            
	            "pagingType": "bootstrap_full_number",
	            columnDefs: [
					{
						orderable: false,
						targets: 0,
						width: "50px",

					},
					{	
						orderable: false,
						targets: 1,
						width: "50px",
					},
					{
						targets: 2,
						width: "100px"
					}
					],
	            order: [
	                [2, "asc"]
	            ] 
	        });

	    }
	
	$scope.cadastrarFilial = function() {
		$scope.limparFilial();

		$scope.alterando = false;
		
		$scope.salvar = function(filial){
			$http.post("filial/salvar", filial)
			.success(function(response){
				$('#modal_filial').modal('hide')
				$('body').removeClass('modal-open');
				$('.modal-backdrop').remove();
				
				$scope.buscarFilial()
			})
			.error(function(error){


			});
			
		}
		
	}
	
	$scope.alterarFilial = function (id){
		$scope.alterando = true;
		$http.get("filial/buscar/" + id)
		.success(function(response){
			$scope.filial = response;
		})
		.error(function(error){

		});
		
		$scope.salvar = function(filial){
			$http.post("filial/atualizar", filial)
			.success(function(response){
				$('#modal_filial').modal('hide')
				$('body').removeClass('modal-open');
				$('.modal-backdrop').remove();
				
				$scope.buscarFilial()
			})
			.error(function(error){
				
			});
		}
		
	}
	
	$scope.deletarFilial = function (id){
		$http.delete("filial/deletar/" + id)
		.success(function(response){
			$scope.buscarFilial();
 		})
		.error(function(error){

		});
	}
	
	
    
});