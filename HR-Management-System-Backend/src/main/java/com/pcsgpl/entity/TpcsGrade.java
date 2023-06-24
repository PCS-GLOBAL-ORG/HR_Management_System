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
@Table(name = "Tpcs_Grade")
public class TpcsGrade {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="grade_Id")
	private Integer gradeId;
	
	@Column(name="grade")
	private String gradeName;
}
