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

import br.com.unievangelica.courier.entity.Deposito;
import br.com.unievangelica.courier.service.DepositoService;

@RestController
@RequestMapping("/deposito")
public class DepositoController extends GenericControllerImpl<Deposito, Integer>{
	
	DepositoService service;
	
	@Autowired
	public DepositoController(DepositoService service) {
		super(service);
		this.service = service;
	}
	
	
//	@RequestMapping(value="/salvar", method=RequestMethod.POST , consumes=MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<Deposito> salvarDeposito(@RequestBody Deposito deposito) throws Exception {
//		service.salvarDeposito(deposito);
//		return new ResponseEntity<>(deposito, HttpStatus.OK);
//	}
	
//	@RequestMapping(method=RequestMethod.GET, value="/buscarTeste/{id}",produces=MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<Deposito> buscarPorId(@PathVariable Integer id) throws Exception{
//		return new ResponseEntity<>(service.buscarPorId(id), HttpStatus.OK);
//	}
	

}
