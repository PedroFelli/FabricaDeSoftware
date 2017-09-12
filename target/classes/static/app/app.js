var app = angular.module("courierApp", ['ngRoute']);


app.config(['$routeProvider',
    function($routeProvider) {

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
        .otherwise({
    		redirectTo: "/"
    	});
        

    }]
);  

