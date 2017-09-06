package br.com.unievangelica.courier.dao;

import org.springframework.stereotype.Repository;

import br.com.unievangelica.courier.entity.Filial;
import br.com.unievangelica.courier.hibernate.HibernateUtilImpl;

@Repository
public class FilialDAO extends HibernateUtilImpl <Filial, Integer>{
	
	public FilialDAO() {
		super(Filial.class);
	}

}
