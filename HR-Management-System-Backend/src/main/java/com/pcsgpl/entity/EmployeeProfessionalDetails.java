package com.pcsgpl.entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employee_professional_details")
public class EmployeeProfessionalDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "user_id")
	private int user_id;
	
	@Column(name = "employee_id")
	private int employee_id;
	
	@Column(name = "employment_name")
	private String employment_name;
	
	@Column(name = "employment_duration")
	private String employment_duration;
	
	@Column(name = "joining_date")
	private Date joining_date;
	
	@Column(name = "release_date")
	private Date release_date;
	
	public EmployeeProfessionalDetails(int employee_id, String employment_name, String employment_duration, Date joining_date,
			Date release_date) {
		super();
		this.employee_id = employee_id;
		this.employment_name = employment_name;
		this.employment_duration = employment_duration;
		this.joining_date = joining_date;
		this.release_date = release_date;
	}
 
	public EmployeeProfessionalDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getEmployee_id() {
		return employee_id;
	}

	public void setEmployee_id(int employee_id) {
		this.employee_id = employee_id;
	}

	public String getEmployment_name() {
		return employment_name;
	}

	public void setEmployment_name(String employment_name) {
		this.employment_name = employment_name;
	}

	public String getEmployment_duration() {
		return employment_duration;
	}

	public void setEmployment_duration(String employment_duration) {
		this.employment_duration = employment_duration;
	}

	public Date getJoining_date() {
		return joining_date;
	}

	public void setJoining_date(Date joining_date) {
		this.joining_date = joining_date;
	}

	public Date getRelease_date() {
		return release_date;
	}

	public void setRelease_date(Date release_date) {
		this.release_date = release_date;
	}
	
	
}

