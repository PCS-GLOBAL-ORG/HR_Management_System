package com.pcsgpl.dto;

public class AccountDetailsDto {
	
	private Integer userId;
	
	private Integer employeeId;

	private String panNumber;

	private Long primaryBankAcNum;

	private Long secondaryBankAcNum;

	public AccountDetailsDto(Integer userId, Integer employeeId, String panNumber, Long primaryBankAcNum, Long secondaryBankAcNum) {
		this.userId = userId;
		this.employeeId = employeeId;
		this.panNumber = panNumber;
		this.primaryBankAcNum = primaryBankAcNum;
		this.secondaryBankAcNum = secondaryBankAcNum;
	}

	public AccountDetailsDto() {
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
		return "AccountDetailsDto [userId=\" + userId + \", employeeId=" + employeeId + ", panNumber=" + panNumber + ", primaryBankAcNum="
				+ primaryBankAcNum + ", secondaryBankAcNum=" + secondaryBankAcNum + "]";
	}
	
	
	
}