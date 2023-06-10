package com.pcsgpl.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.pcsgpl.entity.EmployeeUserProfile;
import com.pcsgpl.entity.UserRole;
import com.pcsgpl.repository.EmployeeUserProfileRepository;
import com.pcsgpl.repository.UserRoleRepository;

@Service
public class EmployeeUserProfileServiceImpl implements EmployeeUserProfileService {
	
	@Autowired
	private EmployeeUserProfileRepository employeeRepository;
//	private final UserRoleRepository userRoleRepository;
//	
//	EmployeeUserProfileServiceImpl(EmployeeUserProfileRepository employeeRepository, UserRoleRepository userRoleRepository){
//		this.employeeRepository = employeeRepository;
//		this.userRoleRepository = userRoleRepository;
//	}
//	
//	public void saveUserId(String userRole) {
//		UserRole role = userRoleRepository.findById(userRole)
//				.orElseThrow(() -> new IllegalArgumentException("Invalid user role"));
//		
//		EmployeeUserProfile userProfile = new EmployeeUserProfile();
//		userProfile.setUserRoleID(role.getUserRoleID());
//		
//		employeeRepository.save(userProfile);
//	}
//	
	@Override
	public EmployeeUserProfile addEmployee(EmployeeUserProfile employee) {
	
		EmployeeUserProfile emp = employeeRepository.save(employee);
		return emp;
		
//		return employeeRepository.save(employee);
	}

	@Override
	public String removeEmployee(int userId) {
		
		employeeRepository.deleteById(userId);
		return "Delete data successfully";
	}

	@Override
	public Optional<EmployeeUserProfile> findEmpById(int userId) {
		
		Optional<EmployeeUserProfile> emp = employeeRepository.findById(userId);
		
		if(emp.isPresent()) {
			return emp;
		}else {
			return null;
		}
	
	
//	public EmployeeUserProfile findEmpById(int userId) {
//		Optional<EmployeeUserProfile> employee = employeeRepository.findById(userId);
//		if(employee.isPresent()) {
//			return employee.get();
//		}else {
//			return null;
//		}
		
	}

	@Override
	public List<EmployeeUserProfile> getAllEmployee() {

//		List<EmployeeUserProfile> empList = employeeRepository.findAll();
//		return empList;
		
		return employeeRepository.findAll();
	}
    
	@Override
	public String updateEmployee(EmployeeUserProfile employee, int userId) {

		//OPTION 1
//		Optional<EmployeeUserProfile> emp = employeeRepository.findById(userId);
//		
//		if(emp.isPresent()) {
//			EmployeeUserProfile emps = new EmployeeUserProfile();
//			employeeRepository.save(emps);
//			
//			return "Updated Successfully";
//		}else {
//			return "Employee Not Found";
//		}
		
//		//OPTION 2
//		EmployeeUserProfile existingEmployee = employeeRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Employee not found with id:" + userId));
//		
//		existingEmployee.setUserName(updateEmployee.getUserName());
//		
//		return employeeRepository.save(existingEmployee);
//	
		
		//OPTION 3
		EmployeeUserProfile existEmp=employeeRepository.findById(userId).orElse(null);
		if(existEmp!= null) {
			existEmp.setUserRoleID(employee.getUserRoleID());
			employeeRepository.save(existEmp);
			return "Employee User Profile updated successfully "+HttpStatus.OK;
		}else {
			return "Employee Id doesn't exist "+HttpStatus.NOT_FOUND;
		}
		}
	
	}
	
	

