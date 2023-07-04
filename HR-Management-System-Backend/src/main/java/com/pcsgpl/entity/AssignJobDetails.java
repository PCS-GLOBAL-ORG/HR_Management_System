package com.pcsgpl.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="assign_job_details")
public class AssignJobDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id")
	private Integer userId;
	
	@Column(name="employee_id")
	private Integer employeeId;
	
	@Column(name="assign_date")
	private String assignDate;
	
	@Column(name="assign_job_id")
	private Long assignJobId;
	
	@Column(name="assign_job_status")
	private Long assignJobStatus;
	
	@Column(name="assign_job_urgency")
	private Long assignJobUrgency;
	
	@Column(name="assign_to_emp_id")
	private Long assignToEmpId;

	public AssignJobDetails(Integer userId, Integer employeeId, String assignDate, Long assignJobId,
			Long assignJobStatus, Long assignJobUrgency, Long assignToEmpId) {
		super();
		this.userId = userId;
		this.employeeId = employeeId;
		this.assignDate = assignDate;
		this.assignJobId = assignJobId;
		this.assignJobStatus = assignJobStatus;
		this.assignJobUrgency = assignJobUrgency;
		this.assignToEmpId = assignToEmpId;
	}

	public AssignJobDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

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

	public String getAssignDate() {
		return assignDate;
	}

	public void setAssignDate(String assignDate) {
		this.assignDate = assignDate;
	}

	public Long getAssignJobId() {
		return assignJobId;
	}

	public void setAssignJobId(Long assignJobId) {
		this.assignJobId = assignJobId;
	}

	public Long getAssignJobStatus() {
		return assignJobStatus;
	}

	public void setAssignJobStatus(Long assignJobStatus) {
		this.assignJobStatus = assignJobStatus;
	}

	public Long getAssignJobUrgency() {
		return assignJobUrgency;
	}

	public void setAssignJobUrgency(Long assignJobUrgency) {
		this.assignJobUrgency = assignJobUrgency;
	}

	public Long getAssignToEmpId() {
		return assignToEmpId;
	}

	public void setAssignToEmpId(Long assignToEmpId) {
		this.assignToEmpId = assignToEmpId;
	}

	@Override
	public String toString() {
		return "AssignJobDetails [userId=" + userId + ", employeeId=" + employeeId + ", assignDate=" + assignDate
				+ ", assignJobId=" + assignJobId + ", assignJobStatus=" + assignJobStatus + ", assignJobUrgency="
				+ assignJobUrgency + ", assignToEmpId=" + assignToEmpId + "]";
	}
	
	
}
