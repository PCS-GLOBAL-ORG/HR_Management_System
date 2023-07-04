 package com.pcsgpl.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="employee_education_details")
public class EmployeeEducation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int userId;
	
	@Column(name="employee_id")
	private int employeeId;
	
	
	@Column(name="ug_qualification")
	private int ugQualification;
	
	@Column(name="ug_specialization")
	private int ugSpecialization;
	
	@Column(name="ug_year_of_passout")
	private String ugYearOfPassout;
	
	@Column(name="ug_university")
	private int ugUniversity;
	
	@Column(name="pg_qualification")
	private int pgQualification;
	
	@Column(name="pg_specialization")
	private int pgSpecialization;
	
	@Column(name="pg_year_of_passout")
	private String pgYearOfPassout;
	
	@Column(name="pg_university")
	private int pgUniversity;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public int getUgQualification() {
		return ugQualification;
	}

	public void setUgQualification(int ugQualification) {
		this.ugQualification = ugQualification;
	}

	public int getUgSpecialization() {
		return ugSpecialization;
	}

	public void setUgSpecialization(int ugSpecialization) {
		this.ugSpecialization = ugSpecialization;
	}

	public String getUgYearOfPassout() {
		return ugYearOfPassout;
	}

	public void setUgYearOfPassout(String ugYearOfPassout) {
		this.ugYearOfPassout = ugYearOfPassout;
	}

	public int getUgUniversity() {
		return ugUniversity;
	}

	public void setUgUniversity(int ugUniversity) {
		this.ugUniversity = ugUniversity;
	}

	public int getPgQualification() {
		return pgQualification;
	}

	public void setPgQualification(int pgQualification) {
		this.pgQualification = pgQualification;
	}

	public int getPgSpecialization() {
		return pgSpecialization;
	}

	public void setPgSpecialization(int pgSpecialization) {
		this.pgSpecialization = pgSpecialization;
	}

	public String getPgYearOfPassout() {
		return pgYearOfPassout;
	}

	public void setPgYearOfPassout(String pgYearOfPassout) {
		this.pgYearOfPassout = pgYearOfPassout;
	}

	public int getPgUniversity() {
		return pgUniversity;
	}

	public void setPgUniversity(int pgUniversity) {
		this.pgUniversity = pgUniversity;
	}
	
	
//	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//	@JoinColumn(name = "ugQualificationId")
//	private UgQualification ugQual;
//	
//	
//	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//	@JoinColumn(name="ugSpecializationId")
//	private UgSpecialization specialization;
//	
//	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//	@JoinColumn(name="ugUniversityId")
//	private UgUniversity university;
//	
//	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//	@JoinColumn(name="pgQualificationId")
//	private PgQualification pgQualification2;
//	
//	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//	@JoinColumn(name="pgSpecializationId")
//	private PgSpecialization pgSpecialization2;
//	
//	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//	@JoinColumn(name="pgUniversityId")
//	private PgUniversity pgUniversity2;
	
	
}
