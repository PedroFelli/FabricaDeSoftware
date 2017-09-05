package br.com.unievangelica.courier.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.unievangelica.courier.dao.PessoaDAO;
import br.com.unievangelica.courier.entity.Pessoa;

@Service
public class PessoaService extends GenericServiceImpl<Pessoa, Integer>{

	PessoaDAO pessoaDao = new PessoaDAO();
	
	public PessoaService(PessoaDAO pessoaDao) {
		super(pessoaDao);
		// TODO Auto-generated constructor stub
		this.pessoaDao = pessoaDao; 
	}
	
	
}
