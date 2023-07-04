package com.pcsgpl.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.pcsgpl.entity.AssignJobDetails;
import com.pcsgpl.service.AssignJobService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/assignJob")
public class AssignJobController {
	
	@Autowired
	private AssignJobService empserv;
	
	@GetMapping("/empJob")
	public List<AssignJobDetails> getAllEmp(){
		
	  return empserv.getAllemployee();
		
	}
	
	@PostMapping("/empJob")
	public void addEmp(@RequestBody AssignJobDetails emPrfDtails) 
	{
	    empserv.addEmpDetails(emPrfDtails);
	  
	}
	
	@GetMapping("/empJob/{userId}")
	public ResponseEntity<AssignJobDetails> getEmpId(@PathVariable("user_id") Integer userId) {
		
		ResponseEntity<AssignJobDetails> employeeId = this.empserv.getEmployeeById(userId);
		
		return employeeId;
	}
	
	
	@PutMapping("/empJob/{userId}")
	public AssignJobDetails updateEmp(@PathVariable int userId,@RequestBody AssignJobDetails emply){
		
		
		this.empserv.updateEmployee(userId, emply);
		
		return emply;
	}
	
	
	@DeleteMapping("/empJob/{userId}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable int userId){
		
		 ResponseEntity<Map<String, Boolean>> deleteEmp = this.empserv.deleteEmployee(userId);
		
		 return deleteEmp;
	}

}
