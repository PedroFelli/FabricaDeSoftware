package br.com.unievangelica.courier.dao;

import org.springframework.stereotype.Repository;

import br.com.unievangelica.courier.entity.Empresa;
import br.com.unievangelica.courier.entity.Produto;
import br.com.unievangelica.courier.hibernate.HibernateUtilImpl;

@Repository
public class EmpresaDAO extends HibernateUtilImpl <Empresa, Integer> {
	
	public EmpresaDAO() {
		super(Empresa.class);
		// TODO Auto-generated constructor stub
	}

}
