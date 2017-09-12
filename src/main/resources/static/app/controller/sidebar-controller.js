app.controller("sidebarController", function($scope,$http,$location) {
	
	
	if($location.path() == '/admin'){
		var inicio = document.getElementById("inicio");
		inicio.className = "start active open";
		
		var cadastro = document.getElementById("cadastro");
		cadastro.className += "nav-item";
		
	} else if($location.path().startsWith('/admin/cadastro')){
		
		var cadastro = document.getElementById("cadastro");
		cadastro.className += "start active open";
		
		var inicio = document.getElementById("inicio");
		inicio.className = "nav-item";

	}
	
	
});
