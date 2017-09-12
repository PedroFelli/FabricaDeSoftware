app.controller("produtoController", function($scope,$http) {
	
	
	$scope.limparProduto = function () {
		$scope.produto = {
				id: undefined,
				nome: undefined,
				preco: undefined,
				descricao: undefined,
				quantidade: undefined,
				deposito: {}
		}
	}
	
	
	$scope.buscarProdutos = function(){
		if(table!= undefined){
			table.fnDestroy();
		}
		$http.get("produto/buscarTodos")
		.success(function(response){
			$scope.produtos = response;

		})
		.error(function(error){


		});
		
		$http.get("deposito/buscarTodos")
		.success(function(response){
			$scope.depositos = response;
			

		})
		.error(function(error){


		});
	}
	
	$scope.buscarProdutos();
	
	
	$scope.cadastrarProduto = function() {
		$scope.alterando = false;

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
		$scope.alterando = true;
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
	
	$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {

		initTable1();

	});
	
	var table;
	
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
				},
				{
					targets: 3,
					width: "100px"
				},
				{
					targets: 4,
					width: "100px"
				}
				],
            order: [
                [2, "asc"]
            ] // set first column as a default sort by asc
        });

    }
	
    
});