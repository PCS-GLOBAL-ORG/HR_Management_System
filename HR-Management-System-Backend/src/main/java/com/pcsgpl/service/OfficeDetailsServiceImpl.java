package com.pcsgpl.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.pcsgpl.entity.OfficeDetails;
import com.pcsgpl.repository.EmployeeOfficeDetailsRepository;

@Service
public class OfficeDetailsServiceImpl implements OfficeDetailsService {
	
	@Autowired
	private EmployeeOfficeDetailsRepository officeRepository;
	
	@Override
	public String addEmployee(OfficeDetails office) {
	
		officeRepository.save(office);
		return "Employee Education Details Added Successfully";
		
//		return employeeRepository.save(employee);
	}
	
	@Override
	public String removeEmployee(int userId) {
		
		officeRepository.deleteById(userId);
		return "Delete data successfully";
	}
	
	@Override
	public Optional<OfficeDetails> findEmpById(int userId) {
		
		Optional<OfficeDetails> emp = officeRepository.findById(userId);
		
		if(emp.isPresent()) {
			return emp;
		}else {
			return null;
		}
	}
	
	@Override
	public List<OfficeDetails> getAllEmployeeofficeDetails() {
		return officeRepository.findAll();
	}
	
	
	public String updateEmployeeOfficeDetailsById(Integer userId,OfficeDetails office) {
		// TODO Auto-generated method stub
		HttpHeaders headers=new HttpHeaders();
		
		OfficeDetails existEmp=officeRepository.findById(userId).orElse(null);
		if(existEmp!=null) {
			existEmp.setBaseBranchId(office.getBaseBranchId());
			existEmp.setDeputedLocationId(office.getDeputedLocationId());
			existEmp.setSupervisorId(office.getSupervisorId());
			existEmp.setParentIouId(office.getParentIouId());
			existEmp.setSubIouId(office.getSubIouId());
			existEmp.setGradeId(office.getGradeId());
			existEmp.setEmployeeStatus(office.getEmployeeStatus());
			existEmp.setDateOfJoining(office.getDateOfJoining());
			existEmp.setEmployeeId(office.getEmployeeId());
			existEmp.setEmployeeType(office.getEmployeeType());
			

			
			officeRepository.save(existEmp);
			return "Employee Office Details updated successfully "+HttpStatus.OK;
		}else {
			return "Employee Id doesn't exist "+HttpStatus.NOT_FOUND;
		}
	}
	
	

}

