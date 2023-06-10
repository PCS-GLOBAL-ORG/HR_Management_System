package com.pcsgpl.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.cassandra.CassandraProperties.Request;
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

import com.pcsgpl.entity.EmployeeUserProfile;
import com.pcsgpl.entity.UserRole;
import com.pcsgpl.exception.ResourceNotFoundException;
import com.pcsgpl.repository.EmployeeUserProfileRepository;
import com.pcsgpl.service.EmployeeUserProfileService;
import com.pcsgpl.service.EmployeeUserProfileServiceImpl;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/emp")
public class EmployeeUserProfileController {
	
//	private final EmployeeUserProfileServiceImpl service;
	
//	public EmployeeUserProfileController(EmployeeUserProfileServiceImpl service) {
//		this.service = service;
//		
//	}
	
	@Autowired
	private EmployeeUserProfileRepository employeeRepository;
	
	//get all user employees
	@GetMapping("/employees")
	public List<EmployeeUserProfile> getAllEmployees(){
		return employeeRepository.findAll();
	}
	
//	//save role id from dropdown
//	@PostMapping("/roles")
//	public ResponseEntity<String> saveUserId(@RequestBody UserRole userRole){
//		try {
//			service.saveUserId(userRole.getUserRole());
//			return ResponseEntity.ok("User Role saved");
//		}catch(Exception e) {
//		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Invalide UserRole");
//		}
//	}
	
	//create employee rest api
	@PostMapping("/employees")
	public EmployeeUserProfile createEmployee(@RequestBody EmployeeUserProfile employee) {
		System.out.println("inside employee");
		return employeeRepository.save(employee);
	}
	
	//GET employee by id rest api
	@GetMapping("/employees/{userId}")
	public ResponseEntity<EmployeeUserProfile>  getEmployeeById(@PathVariable int userId) {
		EmployeeUserProfile employee = employeeRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:" + userId));
		return ResponseEntity.ok(employee);
	}
	
	//update employee rest api
	@PutMapping("/employees/{userId}")
	public ResponseEntity<EmployeeUserProfile> updatedEmployee(@PathVariable int userId,@RequestBody EmployeeUserProfile employeeDetails){
		
		EmployeeUserProfile employee = employeeRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:" + userId));
		
		employee.setEmployeeId(employeeDetails.getEmployeeId());
		employee.setUserCallName(employeeDetails.getUserCallName());
		employee.setUserName(employeeDetails.getUserName());
		employee.setUserPassword(employeeDetails.getUserPassword());
		employee.setUserRoleID(employeeDetails.getUserRoleID());
		
		EmployeeUserProfile updatedEmployee = employeeRepository.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}
	
	//delete employee rest api
	@DeleteMapping("/employees/{userId}")
	public ResponseEntity< Map<String, Boolean>> deleteEmployee(@PathVariable int userId){
		EmployeeUserProfile employee = employeeRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:" + userId));
		
		employeeRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
