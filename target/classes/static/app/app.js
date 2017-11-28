var app = angular.module("courierApp", ['ngRoute']);


app.config(['$routeProvider',
    function($routeProvider) {

	// Initialize Firebase
	 var config = {
	   apiKey: "AIzaSyCnb1-6ifibViQZp_K0y3qhrdDrIZvGTKE",
	   authDomain: "gladiatorapp-627ea.firebaseapp.com",
	   databaseURL: "https://gladiatorapp-627ea.firebaseio.com",
	   projectId: "gladiatorapp-627ea",
	   storageBucket: "gladiatorapp-627ea.appspot.com",
	   messagingSenderId: "901467024091"
	 };
	 firebase.initializeApp(config);
	
      $routeProvider
      .when('/', {
          templateUrl: 'app/view/login/login.html',
          controller: 'loginController'
        })
        //para acessar as páginas da rota do angular deve conter /#/ na url, exemplo: "localhost:8084/courier/#/admin/produto"
          .when('/admin/', {
          templateUrl: 'app/view/inicio/inicio.html',
          controller: 'inicioController'
        }) 
        .when('/admin/cadastro/produto', {
          templateUrl: 'app/view/produto/listar-produto.html',
          controller: 'produtoController'
        })
       .when('/admin/cadastro/pessoa', {
          templateUrl: 'app/view/pessoa/listar-pessoa.html',
          controller: 'pessoaController'
        })
        .when('/admin/cadastro/deposito', {
          templateUrl: 'app/view/deposito/listar-deposito.html',
          controller: 'depositoController'
        })
        .when('/admin/cadastro/filial', {
          templateUrl: 'app/view/filial/listar-filial.html',
          controller: 'filialController'
        })
        .when('/admin/cadastro/empresa', {
          templateUrl: 'app/view/empresa/listar-empresa.html',
          controller: 'empresaController'
        })
        .when('/admin/contato', {
          templateUrl: 'app/view/contato/contato.html',
          controller: 'contatoController'
        })
        .when('/admin/relatorios', {
          templateUrl: 'app/view/relatorio/relatorio.html',
          controller: 'relatorioController'
        })
        .otherwise({
    		redirectTo: "/"
    	});
        

    }]
);  

