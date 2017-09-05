package br.com.unievangelica.courier.dao;

import org.springframework.stereotype.Repository;

import br.com.unievangelica.courier.entity.Pessoa;
import br.com.unievangelica.courier.entity.Produto;
import br.com.unievangelica.courier.hibernate.HibernateUtilImpl;

@Repository
public class PessoaDAO extends HibernateUtilImpl <Pessoa, Integer>{

	public PessoaDAO() {
		super(Pessoa.class);
		// TODO Auto-generated constructor stub
	}
}
