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

//Long
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="tpcs_location")
@Builder
@Data
public class TpcsLocation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="deputed_location_id")
	private Integer locationId;
	
	@Column(name="location_name")
	private String location;


}
