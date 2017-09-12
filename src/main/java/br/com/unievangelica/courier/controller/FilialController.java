package br.com.unievangelica.courier.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.unievangelica.courier.entity.Empresa;
import br.com.unievangelica.courier.entity.Filial;
import br.com.unievangelica.courier.service.EmpresaService;
import br.com.unievangelica.courier.service.FilialService;
import br.com.unievangelica.courier.service.PessoaService;

@RestController
@RequestMapping("/filial")
public class FilialController  extends GenericControllerImpl<Filial, Integer>{
	
	FilialService service;
	
	@Autowired
	public FilialController(FilialService service) {
		super(service);
		this.service = service;
	}
}
