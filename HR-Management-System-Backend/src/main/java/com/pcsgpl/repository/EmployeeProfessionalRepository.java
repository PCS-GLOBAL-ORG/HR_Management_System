package com.pcsgpl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pcsgpl.entity.EmployeeProfessionalDetails;

@Repository
public interface EmployeeProfessionalRepository extends JpaRepository<EmployeeProfessionalDetails, Integer>{

}
