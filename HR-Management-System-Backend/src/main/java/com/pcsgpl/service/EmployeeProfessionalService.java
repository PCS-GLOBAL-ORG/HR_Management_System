package com.pcsgpl.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.pcsgpl.entity.EmployeeProfessionalDetails;
import com.pcsgpl.exception.ResourceNotFoundException;
import com.pcsgpl.repository.EmployeeProfessionalRepository;

@Service
public class EmployeeProfessionalService {
	
	@Autowired
	public EmployeeProfessionalRepository empRepository;
	
	public List<EmployeeProfessionalDetails> getAllemployee()
	{
		List<EmployeeProfessionalDetails> empdetails=new ArrayList<EmployeeProfessionalDetails>();
		
		empRepository.findAll().forEach(empdetails::add);
	  	
		return empdetails;
	}

	public void addEmpDetails(EmployeeProfessionalDetails emPrfDtails) {
		
		empRepository.save(emPrfDtails);
		
	}

	
	
	public ResponseEntity<EmployeeProfessionalDetails> getEmployeeById(Integer userId) {
		
		EmployeeProfessionalDetails emplo=empRepository.findById(userId)
				.orElseThrow();
		
		return ResponseEntity.ok(emplo);
	}
	
	
	
	public ResponseEntity<EmployeeProfessionalDetails> updateEmployee( int userId,EmployeeProfessionalDetails emply){
		
		EmployeeProfessionalDetails emploDetail=empRepository.findById(userId)
				.orElseThrow(()->new ResourceNotFoundException("employee not update"+userId));
		
		
		emploDetail.setEmployee_id(emply.getEmployee_id());
		emploDetail.setEmployment_name(emply.getEmployment_name());
		emploDetail.setEmployment_duration(emply.getEmployment_duration());
		emploDetail.setJoining_date(emply.getJoining_date());
		emploDetail.setRelease_date(emply.getRelease_date());
		
	
		
		EmployeeProfessionalDetails updateEmpDetails = empRepository.save(emploDetail);
		return ResponseEntity.ok(updateEmpDetails);
		
	}
	
	
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(int userId){
		
		EmployeeProfessionalDetails employDetail=empRepository.findById(userId)
				.orElseThrow(()->new ResourceNotFoundException("employee not update"+userId));
		
		
		empRepository.delete(employDetail);
		Map<String, Boolean> empResponse=new HashMap<>();
		empResponse.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(empResponse);
		
		
	}
	 
	

}
