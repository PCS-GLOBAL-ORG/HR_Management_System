package com.pcsgpl.controller;



import java.util.Arrays;
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



import com.pcsgpl.entity.OfficeDetails;
import com.pcsgpl.repository.EmployeeOfficeDetailsRepository;
import com.pcsgpl.service.OfficeDetailsService;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/officeDetails")
public class OfficeDetailsController {
	@Autowired
	private OfficeDetailsService officeDetailsService;
	
	@Autowired
	private EmployeeOfficeDetailsRepository officeRepository;
	

	
	@GetMapping("/office")
	public List<OfficeDetails> getAllEmployeeofficeDetails(){
		return officeDetailsService.getAllEmployeeofficeDetails();
	}
	
	@PostMapping("/office")
	public String addEmployeeOffice(@RequestBody OfficeDetails office) {
		return officeDetailsService.addEmployee(office);
	}
	
	
	@GetMapping("/office/{userId}")
	public ResponseEntity<?> getByEmployeeId(@PathVariable("userId") Integer userId ) {
	
		HttpHeaders headers= new HttpHeaders();
		
		if(officeRepository.findById(userId).isPresent()) {
			headers.add("Project-Name","Employee Office Details");
			return new ResponseEntity<OfficeDetails>(officeRepository.findById(userId).get(),headers,HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("Employee Id doesn't exist..try agaian",headers,HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/office/{userId}")
	public String updateEmployeeEducation(@PathVariable("userId") Integer userId,@RequestBody OfficeDetails office) {
		return officeDetailsService.updateEmployeeOfficeDetailsById(userId,office);
	}

	@DeleteMapping("/office/{userId}")
	public ResponseEntity<?> deleteEmployeeEducationById(@PathVariable("userId")Integer userId) {
		HttpHeaders headers=new HttpHeaders();
		OfficeDetails office=officeRepository.findById(userId).orElse(null);
		if(office!=null) {
			headers.add("project-name","Employee Office Details");
			officeRepository.deleteById(userId);
			return new ResponseEntity<String>("Employee Office Details Deteleted Successfully",headers,HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("Employee Id doesn't exist",headers,HttpStatus.NOT_FOUND);
		}
	}
	
	
}
