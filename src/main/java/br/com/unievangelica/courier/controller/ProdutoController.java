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

import br.com.unievangelica.courier.entity.Produto;
import br.com.unievangelica.courier.service.ProdutoService;

@RestController
@RequestMapping("/produto")
public class ProdutoController extends GenericControllerImpl<Produto, Integer>{
	
	ProdutoService service;
	
	@Autowired
	public ProdutoController(ProdutoService service) {
		super(service);
		this.service = service;
	}
	
	
	@RequestMapping(value="/adicionar", method=RequestMethod.POST , consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Boolean> adicionarEstoque(@RequestBody String json) throws Exception {
		return new ResponseEntity<>(service.adicionarEstoque(json), HttpStatus.OK);
	}
	
	@RequestMapping(value="/remover", method=RequestMethod.POST , consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Boolean> removerEstoque(@RequestBody String json) throws Exception {
		return new ResponseEntity<>(service.removerEstoque(json), HttpStatus.OK);
	}
	
	

}
