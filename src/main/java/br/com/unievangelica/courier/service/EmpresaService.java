package br.com.unievangelica.courier.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.unievangelica.courier.dao.EmpresaDAO;
import br.com.unievangelica.courier.dao.ProdutoDAO;
import br.com.unievangelica.courier.entity.Empresa;
import br.com.unievangelica.courier.entity.Produto;

@Service
public class EmpresaService extends GenericServiceImpl<Empresa, Integer> {
	
	EmpresaDAO empresaDao = new EmpresaDAO();

	public EmpresaService(EmpresaDAO empresaDao) {
		super(empresaDao);
		// TODO Auto-generated constructor stub
		this.empresaDao = empresaDao;
	}
}
