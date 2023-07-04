package com.pcsgpl.service;

import java.util.List;
import java.util.Optional;

import com.pcsgpl.entity.JobDetails;


public interface JobDetailsService {
	
	//JobDetails getAllJobDetails();
public String addEmployee(JobDetails job);
	
    public String removeEmployee(int jobId);
	
	public Optional<JobDetails> findEmpById(int jobId);
	
	public List<JobDetails> getAllEmployeejobDetails();
	
	public String updateEmployeeOfficeDetailsById(Integer id,JobDetails office);

}
