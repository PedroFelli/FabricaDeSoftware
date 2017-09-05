package br.com.unievangelica.courier.dao;

import org.springframework.stereotype.Repository;

import br.com.unievangelica.courier.entity.Deposito;
import br.com.unievangelica.courier.hibernate.HibernateUtilImpl;

@Repository
public class DepositoDAO extends HibernateUtilImpl <Deposito, Integer>{

	public DepositoDAO() {
		super(Deposito.class);
		// TODO Auto-generated constructor stub
	}

	
	
}
