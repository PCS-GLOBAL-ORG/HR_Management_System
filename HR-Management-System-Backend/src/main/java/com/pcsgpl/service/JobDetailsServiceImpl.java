package com.pcsgpl.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.pcsgpl.entity.JobDetails;
import com.pcsgpl.repository.JobDetailsRepository;

@Service
public class JobDetailsServiceImpl implements JobDetailsService {
	
	@Autowired
	private JobDetailsRepository  jobRepository;
	

	@Override
	public List<JobDetails> getAllEmployeejobDetails() {
		return jobRepository.findAll();
		// TODO Auto-generated method stub
		
	}
	
	@Override
	public String addEmployee(JobDetails job) {
	
		jobRepository.save(job);
		return "Employee Job Details Added Successfully";
		
//		return employeeRepository.save(employee);
	}
	
	@Override
	public String removeEmployee(int jobId) {
		
		jobRepository.deleteById(jobId);
		return "Delete data successfully";
	}
	
	@Override
	public Optional<JobDetails> findEmpById(int jobId) {
		
		Optional<JobDetails> emp = jobRepository.findById(jobId);
		
		if(emp.isPresent()) {
			return emp;
		}else {
			return null;
		}
	}
	
	public String updateEmployeeOfficeDetailsById(Integer jobId,JobDetails job) {
		// TODO Auto-generated method stub
		HttpHeaders headers=new HttpHeaders();
		
		JobDetails existEmpJob=jobRepository.findById(jobId).orElse(null);
		if(existEmpJob!=null) {
			existEmpJob.setJobDescription(job.getJobDescription());
			existEmpJob.setJobCreatedByEmpId(job.getJobCreatedByEmpId());
			existEmpJob.setJobStatus(job.getJobStatus());
			existEmpJob.setJobUrgency(job.getJobUrgency());
			existEmpJob.setJobCreationDate(job.getJobCreationDate());

			
			jobRepository.save(existEmpJob);
			return "Employee Office Details updated successfully "+HttpStatus.OK;
		}else {
			return "Employee Id doesn't exist "+HttpStatus.NOT_FOUND;
		}
	}

}
