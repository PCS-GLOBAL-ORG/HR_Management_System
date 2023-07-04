package com.pcsgpl.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.pcsgpl.entity.AssignJobDetails;
import com.pcsgpl.exception.ResourceNotFoundException;
import com.pcsgpl.repository.AssignJobRepository;

@Service
public class AssignJobService {
	
	@Autowired
	public AssignJobRepository empJobRepository;
	
	public List<AssignJobDetails> getAllemployee()
	{
		List<AssignJobDetails> empdetails=new ArrayList<AssignJobDetails>();
		
		empJobRepository.findAll().forEach(empdetails::add);
	  	
		return empdetails;
	}

	public void addEmpDetails(AssignJobDetails emPrfDtails) {
		
		empJobRepository.save(emPrfDtails);
		
	}

	
	
	public ResponseEntity<AssignJobDetails> getEmployeeById(Integer userId) {
		
		AssignJobDetails emplo=empJobRepository.findById(userId)
				.orElseThrow();
		
		return ResponseEntity.ok(emplo);
	}
	
	
	
	public ResponseEntity<AssignJobDetails> updateEmployee( int userId,AssignJobDetails emply){
		
		AssignJobDetails emploDetail=empJobRepository.findById(userId)
				.orElseThrow(()->new ResourceNotFoundException("employee not update"+userId));
		
		
		emploDetail.setEmployeeId(emply.getEmployeeId());
		emploDetail.setAssignDate(emply.getAssignDate());
		emploDetail.setAssignJobId(emply.getAssignJobId());
		emploDetail.setAssignJobStatus(emply.getAssignJobStatus());
		emploDetail.setAssignJobUrgency(emply.getAssignJobUrgency());
		emploDetail.setAssignToEmpId(emply.getAssignToEmpId());
		
	
		
		AssignJobDetails updateEmpDetails = empJobRepository.save(emploDetail);
		return ResponseEntity.ok(updateEmpDetails);
		
	}
	
	
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(int userId){
		
		AssignJobDetails employDetail=empJobRepository.findById(userId)
				.orElseThrow(()->new ResourceNotFoundException("employee not update"+userId));
		
		
		empJobRepository.delete(employDetail);
		Map<String, Boolean> empResponse=new HashMap<>();
		empResponse.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(empResponse);
		
		
	}

}
