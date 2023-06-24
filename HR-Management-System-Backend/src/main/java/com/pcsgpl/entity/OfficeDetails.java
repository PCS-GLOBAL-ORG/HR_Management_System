package com.pcsgpl.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.jsonFormatVisitors.JsonFormatTypes;
import com.fasterxml.jackson.databind.jsonFormatVisitors.JsonValueFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="employee_office_details")
@Builder
public class OfficeDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id")
	private Integer userId;
	
	@Column(name="employee_id")
	private Integer employeeId;
	
	@Column(name="date_of_joining")
	@JsonFormat(pattern="yyyy/MM/dd", shape=JsonFormat.Shape.STRING)
	private LocalDate dateOfJoining;
	
	@Column(name="employee_status")
	private Integer employeeStatus;
	
	@Column(name="grade_id")
	private Integer gradeId;
	
	@Column(name="employee_type")
	private String employeeType;
	
	@Column(name="base_branch_id")
	private Integer baseBranchId;
	
	@Column(name="deputed_location_id")
	private Integer deputedLocationId;
	
	@Column(name="supervisor_id")
	private Integer supervisorId;
	
	@Column(name="parent_iou_id")
	private Integer parentIouId;
	
	@Column(name="sub_iou_id")
	private Integer subIouId;
	

}
