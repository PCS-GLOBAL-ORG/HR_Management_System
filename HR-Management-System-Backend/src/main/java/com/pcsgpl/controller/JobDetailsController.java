package com.pcsgpl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pcsgpl.entity.JobDetails;
import com.pcsgpl.repository.JobDetailsRepository;
import com.pcsgpl.service.JobDetailsService;

@CrossOrigin
@RestController
@RequestMapping("/jobDetails")
public class JobDetailsController {
	
	@Autowired
	private JobDetailsService jobDetailsService;
	
	@Autowired
	private JobDetailsRepository jobRepo;
	
	@GetMapping("/job")
	public List<JobDetails> getAllEmployeejobDetails(){
		return jobDetailsService.getAllEmployeejobDetails();
	}
	
	@PostMapping("/job")
	public String addEmployeeOffice(@RequestBody JobDetails job) {
		return jobDetailsService.addEmployee(job);
	}
	
	
	@GetMapping("/job/{jobId}")
	public ResponseEntity<?> getByEmployeeId(@PathVariable("jobId") Integer userId ) {
	
		HttpHeaders headers= new HttpHeaders();
		
		if(jobRepo.findById(userId).isPresent()) {
			headers.add("Project-Name","Employee Office Details");
			return new ResponseEntity<JobDetails>(jobRepo.findById(userId).get(),headers,HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("Employee Id doesn't exist..try agaian",headers,HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/job/{jobId}")
	public String updateEmployeeEducation(@PathVariable("jobId") Integer userId,@RequestBody JobDetails job) {
		return jobDetailsService.updateEmployeeOfficeDetailsById(userId,job);
	}

	@DeleteMapping("/job/{jobId}")
	public ResponseEntity<?> deleteEmployeeEducationById(@PathVariable("jobId")Integer jobId) {
		HttpHeaders headers=new HttpHeaders();
		JobDetails office=jobRepo.findById(jobId).orElse(null);
		if(office!=null) {
			headers.add("project-name","Employee Job Details");
			jobRepo.deleteById(jobId);
			return new ResponseEntity<String>("Employee Job Details Deteleted Successfully",headers,HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("Employee Id doesn't exist",headers,HttpStatus.NOT_FOUND);
		}
	}
}

