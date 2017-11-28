package br.com.unievangelica.courier.service;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.unievangelica.courier.dao.ProdutoDAO;
import br.com.unievangelica.courier.entity.Produto;

@Service
public class ProdutoService extends GenericServiceImpl<Produto, Integer>{

	ProdutoDAO produtoDao = new ProdutoDAO();
	
	public ProdutoService(ProdutoDAO produtoDao) {
		super(produtoDao);
		// TODO Auto-generated constructor stub
		this.produtoDao = produtoDao; 
	}
	
	@Transactional(readOnly = false, propagation = Propagation.REQUIRED)
//	@Override
	public Boolean adicionarEstoque(String json) throws Exception{
		JSONObject pJson = new JSONObject(json);
		Produto produto = produtoDao.findById(pJson.getInt("produto"));
		produto.setQuantidade(produto.getQuantidade() + pJson.getInt("quantidade"));
		produtoDao.update(produto);
		return true;
	}
	
	@Transactional(readOnly = false, propagation = Propagation.REQUIRED)
//	@Override
	public Boolean removerEstoque(String json) throws Exception{
		JSONObject pJson = new JSONObject(json);
		Produto produto = produtoDao.findById(pJson.getInt("produto"));
		if(produto.getQuantidade() < pJson.getInt("quantidade")) {
			return false;
		} else {
			produto.setQuantidade(produto.getQuantidade() - pJson.getInt("quantidade"));
			produtoDao.update(produto);
			return true;
		}
	}
	
}
