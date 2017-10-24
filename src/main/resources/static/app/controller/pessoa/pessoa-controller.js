app.controller("pessoaController", function($scope,$http) {
	
	
	$scope.limparUsuario = function () {
		$scope.usuario = {
				id: undefined,
				nome: undefined,
				email: undefined,
				tipoPerfil: undefined,
				senha: undefined
		}
	}

	
	$scope.buscarUsuarios = function(){
		$scope.limparUsuario();
		if(table!= undefined){
			table.fnDestroy();
		}
		
		$http.get("pessoa/buscarTodos")
		.success(function(response){
			$scope.usuarios = response;


		})
		.error(function(error){


		});
		
	}
	
	$scope.buscarUsuarios();
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
	
	$scope.cadastrarUsuario = function() {
		$scope.limparUsuario();

		$scope.alterando = false;
		
		$scope.salvar = function(usuario){
			$http.post("pessoa/salvar", usuario)
			.success(function(response){
				$('#modal_usuario').modal('hide')
				$('body').removeClass('modal-open');
				$('.modal-backdrop').remove();
				
				$scope.buscarUsuarios()
			})
			.error(function(error){


			});
			
		}
		
	}
	
	$scope.alterarUsuario = function (id){
		$scope.alterando = true;
		$http.get("pessoa/buscar/" + id)
		.success(function(response){
			$scope.usuario = response;
		})
		.error(function(error){

		});
		
		$scope.salvar = function(usuario){
			$http.post("pessoa/atualizar", usuario)
			.success(function(response){
				$('#modal_usuario').modal('hide')
				$('body').removeClass('modal-open');
				$('.modal-backdrop').remove();
				
				$scope.buscarUsuarios()
			})
			.error(function(error){
				
			});
		}
		
	}
	
	$scope.deletarUsuario = function (id){
		$http.delete("pessoa/deletar/" + id)
		.success(function(response){
			$scope.buscarUsuario();
 		})
		.error(function(error){

		});
	}
	
	
	
    
});