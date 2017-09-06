package br.com.unievangelica.courier.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.unievangelica.courier.entity.Empresa;
import br.com.unievangelica.courier.entity.Filial;
import br.com.unievangelica.courier.service.EmpresaService;

@RestController
@RequestMapping("/filial")
public class FilialController  extends GenericControllerImpl<Filial, Integer>{
	
}
