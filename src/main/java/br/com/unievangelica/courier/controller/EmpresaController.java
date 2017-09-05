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
	
	
	//	@RequestMapping(value="/salvar", method=RequestMethod.POST , consumes=MediaType.APPLICATION_JSON_VALUE)
	//	public ResponseEntity<Produto> salvarProduto(@RequestBody Produto produto) throws Exception {
	//		service.salvarProduto(produto);
	//		return new ResponseEntity<>(produto, HttpStatus.OK);
	//	}
	
	//	@RequestMapping(method=RequestMethod.GET, value="/buscarTeste/{id}",produces=MediaType.APPLICATION_JSON_VALUE)
	//	public ResponseEntity<Produto> buscarPorId(@PathVariable Integer id) throws Exception{
	//		return new ResponseEntity<>(service.buscarPorId(id), HttpStatus.OK);
	//	}

}
