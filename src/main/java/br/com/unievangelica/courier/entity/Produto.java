package br.com.unievangelica.courier.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="PRODUTO")
public class Produto implements Serializable{
	
	private static final long serialVersionUID = 2070219585078349823L;
	
	@Id
	@Column(name="id")
	private Integer id;
	
	@Column(name="descricao")
	private String descricao;
	
	@Column(name="preco")
	private Double preco;
	
	@Column(name="nome")
	private String nome;

	@Column(name="quantidade")
	private Integer quantidade;
	
	@ManyToOne(optional = true)
	@JoinColumn(name="id_deposito")
	private Deposito deposito;
	
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public Deposito getDeposito() {
		return deposito;
	}

	public void setDeposito(Deposito deposito) {
		this.deposito = deposito;
	}
	
	
	
}
