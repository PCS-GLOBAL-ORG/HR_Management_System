package com.pcsgpl.entity;

import java.time.LocalDate;

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
@Table(name = "new_job_details")
@Builder
public class JobDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "job_id")
	private Integer jobId;

	@Column(name = "job_description")
	private String jobDescription;

	@Column(name = "job_created_by_emp_id")
	private Integer jobCreatedByEmpId;

	@Column(name = "job_status")
	private String jobStatus;

	@Column(name = "job_urgency")
	private String jobUrgency;

	@Column(name = "job_creation_date")
	private LocalDate jobCreationDate;

	public JobDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public JobDetails(Integer jobId, String jobDescription, Integer jobCreatedByEmpId, String jobStatus,
			String jobUrgency, LocalDate jobCreationDate) {
		super();
		this.jobId = jobId;
		this.jobDescription = jobDescription;
		this.jobCreatedByEmpId = jobCreatedByEmpId;
		this.jobStatus = jobStatus;
		this.jobUrgency = jobUrgency;
		this.jobCreationDate = jobCreationDate;
	}

	public Integer getJobId() {
		return jobId;
	}

	public void setJobId(Integer jobId) {
		this.jobId = jobId;
	}

	public String getJobDescription() {
		return jobDescription;
	}

	public void setJobDescription(String jobDescription) {
		this.jobDescription = jobDescription;
	}

	public Integer getJobCreatedByEmpId() {
		return jobCreatedByEmpId;
	}

	public void setJobCreatedByEmpId(Integer jobCreatedByEmpId) {
		this.jobCreatedByEmpId = jobCreatedByEmpId;
	}

	public String getJobStatus() {
		return jobStatus;
	}

	public void setJobStatus(String jobStatus) {
		this.jobStatus = jobStatus;
	}

	public String getJobUrgency() {
		return jobUrgency;
	}

	public void setJobUrgency(String jobUrgency) {
		this.jobUrgency = jobUrgency;
	}

	public LocalDate getJobCreationDate() {
		return jobCreationDate;
	}

	public void setJobCreationDate(LocalDate jobCreationDate) {
		this.jobCreationDate = jobCreationDate;
	}

	@Override
	public String toString() {
		return "JobDetails [jobId=" + jobId + ", jobDescription=" + jobDescription + ", jobCreatedByEmpId="
				+ jobCreatedByEmpId + ", jobStatus=" + jobStatus + ", jobUrgency=" + jobUrgency + ", jobCreationDate="
				+ jobCreationDate + "]";
	}
	
	

}
