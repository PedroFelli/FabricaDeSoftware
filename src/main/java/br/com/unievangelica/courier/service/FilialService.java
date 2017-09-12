package br.com.unievangelica.courier.service;

import org.springframework.stereotype.Service;

import br.com.unievangelica.courier.dao.FilialDAO;
import br.com.unievangelica.courier.dao.PessoaDAO;
import br.com.unievangelica.courier.entity.Filial;

@Service
public class FilialService extends GenericServiceImpl<Filial, Integer> {


	FilialDAO filialDao = new FilialDAO();
	
	public FilialService(FilialDAO filialDao) {
		super(filialDao);
		// TODO Auto-generated constructor stub
		this.filialDao = filialDao; 
	}
	
}
