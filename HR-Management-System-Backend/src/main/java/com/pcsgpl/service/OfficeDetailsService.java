package com.pcsgpl.service;

import java.util.List;
import java.util.Optional;



import com.pcsgpl.entity.OfficeDetails;


public interface OfficeDetailsService {

	public String addEmployee(OfficeDetails office);
	
    public String removeEmployee(int userId);
	
	public Optional<OfficeDetails> findEmpById(int userId);
	
	public List<OfficeDetails> getAllEmployeeofficeDetails();
	
	public String updateEmployeeOfficeDetailsById(Integer id,OfficeDetails office);
}
