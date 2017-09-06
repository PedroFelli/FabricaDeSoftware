package br.com.unievangelica.courier.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.unievangelica.courier.entity.Empresa;
import br.com.unievangelica.courier.entity.Produto;
import br.com.unievangelica.courier.service.EmpresaService;
import br.com.unievangelica.courier.service.ProdutoService;

@RestController
@RequestMapping("/empresa")
public class EmpresaController extends GenericControllerImpl<Empresa, Integer>{
	
	EmpresaService service;
	
	@Autowired
	public EmpresaController(EmpresaService service) {
		super(service);
		this.service = service;
	}
	

}
