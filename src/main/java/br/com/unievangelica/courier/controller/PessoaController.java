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

import br.com.unievangelica.courier.entity.Pessoa;
import br.com.unievangelica.courier.service.PessoaService;

@RestController
@RequestMapping("/pessoa")
public class PessoaController extends GenericControllerImpl<Pessoa, Integer>{
	
	PessoaService service;
	
	@Autowired
	public PessoaController(PessoaService service) {
		super(service);
		this.service = service;
	}
}
