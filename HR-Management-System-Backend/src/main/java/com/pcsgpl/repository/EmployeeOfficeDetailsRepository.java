package com.pcsgpl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pcsgpl.entity.OfficeDetails;

@Repository
public interface EmployeeOfficeDetailsRepository extends JpaRepository<OfficeDetails, Integer>{

}
