package br.com.unievangelica.courier.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.unievangelica.courier.dao.DepositoDAO;
import br.com.unievangelica.courier.entity.Deposito;

@Service
public class DepositoService extends GenericServiceImpl<Deposito, Integer>{

	DepositoDAO depositoDao = new DepositoDAO();
	
	public DepositoService(DepositoDAO depositoDao) {
		super(depositoDao);
		// TODO Auto-generated constructor stub
		this.depositoDao = depositoDao; 
	}
	
	public boolean salvarDeposito(Deposito deposito) throws Exception{
		
		depositoDao.save(deposito);
		return true;
		
		
	}
	
	public Deposito buscarPorId(Integer id) throws Exception{
		
		return depositoDao.findById(id);
		
		
		
	}
	
}
