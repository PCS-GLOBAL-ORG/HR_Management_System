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

import com.pcsgpl.entity.EmployeeProfessionalDetails;
import com.pcsgpl.service.EmployeeProfessionalService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/professional")
//@CrossOrigin("*")
public class EmployeeProfessionalController {
	
	@Autowired
	private EmployeeProfessionalService empserv;
	
	@GetMapping("/empdetails")
	public List<EmployeeProfessionalDetails> getAllEmp(){
		
	  return empserv.getAllemployee();
		
	}
	
	@PostMapping("/empdetails")
	public void addEmp(@RequestBody EmployeeProfessionalDetails emPrfDtails) 
	{
	    empserv.addEmpDetails(emPrfDtails);
	  
	}
	
	@GetMapping("/empdetails/{userId}")
	public ResponseEntity<EmployeeProfessionalDetails> getEmpId(@PathVariable("user_id") Integer userId) {
		
		ResponseEntity<EmployeeProfessionalDetails> employeeId = this.empserv.getEmployeeById(userId);
		
		return employeeId;
	}
	
	
	@PutMapping("/empdetails/{userId}")
	public EmployeeProfessionalDetails updateEmp(@PathVariable int userId,@RequestBody EmployeeProfessionalDetails emply){
		
		
		this.empserv.updateEmployee(userId, emply);
		
		return emply;
	}
	
	
	@DeleteMapping("/empdetails/{userId}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable int userId){
		
		 ResponseEntity<Map<String, Boolean>> deleteEmp = this.empserv.deleteEmployee(userId);
		
		 return deleteEmp;
	}

}
