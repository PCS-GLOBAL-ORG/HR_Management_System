package com.pcsgpl.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employee_account_details")
public class AccountDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id")
	private Integer userId;
	
	@Column(name="employee_id")
	private Integer employeeId;
	
	@Column(name="pan_number")
	private String panNumber;
	
	@Column(name="primary_bank_accout_no")
	private Long primaryBankAcNum;
	
	@Column(name="secondary_bank_account_no")
	private Long secondaryBankAcNum;

	public AccountDetails(Integer userId, Integer employeeId, String panNumber, Long primaryBankAcNum, Long secondaryBankAcNum) {
		super();
		this.userId = userId;
		this.employeeId = employeeId;
		this.panNumber = panNumber;
		this.primaryBankAcNum = primaryBankAcNum;
		this.secondaryBankAcNum = secondaryBankAcNum;
	}

	public AccountDetails() {
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

	public String getPanNumber() {
		return panNumber;
	}

	public void setPanNumber(String panNumber) {
		this.panNumber = panNumber;
	}

	public Long getPrimaryBankAcNum() {
		return primaryBankAcNum;
	}

	public void setPrimaryBankAcNum(Long primaryBankAcNum) {
		this.primaryBankAcNum = primaryBankAcNum;
	}

	public Long getSecondaryBankAcNum() {
		return secondaryBankAcNum;
	}

	public void setSecondaryBankAcNum(Long secondaryBankAcNum) {
		this.secondaryBankAcNum = secondaryBankAcNum;
	}

	@Override
	public String toString() {
		return "AccountDetails [employeeId=" + employeeId + ", panNumber=" + panNumber + ", primaryBankAcNum="
				+ primaryBankAcNum + ", secondaryBankAcNum=" + secondaryBankAcNum + "]";
	}
	
	

}