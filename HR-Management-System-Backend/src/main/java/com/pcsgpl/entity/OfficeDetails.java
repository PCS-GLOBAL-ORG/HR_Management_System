package com.pcsgpl.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
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
//	@JsonFormat(pattern="yyyy/MM/dd", shape=JsonFormat.Shape.STRING)
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

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Integer employeeId) {
		this.employeeId = employeeId;
	}

	public LocalDate getDateOfJoining() {
		return dateOfJoining;
	}

	public void setDateOfJoining(LocalDate dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}

	public Integer getEmployeeStatus() {
		return employeeStatus;
	}

	public void setEmployeeStatus(Integer employeeStatus) {
		this.employeeStatus = employeeStatus;
	}

	public Integer getGradeId() {
		return gradeId;
	}

	public void setGradeId(Integer gradeId) {
		this.gradeId = gradeId;
	}

	public String getEmployeeType() {
		return employeeType;
	}

	public void setEmployeeType(String employeeType) {
		this.employeeType = employeeType;
	}

	public Integer getBaseBranchId() {
		return baseBranchId;
	}

	public void setBaseBranchId(Integer baseBranchId) {
		this.baseBranchId = baseBranchId;
	}

	public Integer getDeputedLocationId() {
		return deputedLocationId;
	}

	public void setDeputedLocationId(Integer deputedLocationId) {
		this.deputedLocationId = deputedLocationId;
	}

	public Integer getSupervisorId() {
		return supervisorId;
	}

	public void setSupervisorId(Integer supervisorId) {
		this.supervisorId = supervisorId;
	}

	public Integer getParentIouId() {
		return parentIouId;
	}

	public void setParentIouId(Integer parentIouId) {
		this.parentIouId = parentIouId;
	}

	public Integer getSubIouId() {
		return subIouId;
	}

	public void setSubIouId(Integer subIouId) {
		this.subIouId = subIouId;
	}
	

}
