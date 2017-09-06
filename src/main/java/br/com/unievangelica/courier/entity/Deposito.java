package br.com.unievangelica.courier.entity;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="DEPOSITO")
public class Deposito implements Serializable {

	private static final long serialVersionUID = -3521414800549159320L;
	
	@Id
	@Column(name="id")
	private Integer id;
	
	@Column(name="capacidade")
	private Integer capacidade;
	
	@ManyToOne
	@JoinColumn(name="id_filial")
	private Filial filial;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getCapacidade() {
		return capacidade;
	}

	public void setCapacidade(Integer capacidade) {
		this.capacidade = capacidade;
	}

	public Filial getFilial() {
		return filial;
	}

	public void setFilial(Filial filial) {
		this.filial = filial;
	}

	
	
}
