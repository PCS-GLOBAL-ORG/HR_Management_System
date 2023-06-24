package com.pcsgpl.service;


import java.util.List;
import java.util.Optional;

import com.pcsgpl.entity.EmployeeEducation;


public interface EmployeeEducationService {

	public String insertEmployeeEducationDetails(EmployeeEducation education);
	
    public String removeEmployee(int userId);
	
	public Optional<EmployeeEducation> findEmpById(int userId);
	
	public List<EmployeeEducation> getAllEmployeeEducation();
	
	public String updateEmployeeEducationById(Integer id,EmployeeEducation education);
	
}
