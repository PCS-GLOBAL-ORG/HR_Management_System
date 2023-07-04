package com.pcsgpl.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="tpcs_sub_iou_tbl")
public class SubIou {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="sub_iou_id")
	private Integer subIouId;
	
	@Column(name="sub_iou_name")
	private String subIouName;

	public Integer getSubIouId() {
		return subIouId;
	}

	public void setSubIouId(Integer subIouId) {
		this.subIouId = subIouId;
	}

	public String getSubIouName() {
		return subIouName;
	}

	public void setSubIouName(String subIouName) {
		this.subIouName = subIouName;
	}

}