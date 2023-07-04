package com.pcsgpl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pcsgpl.entity.AssignJobDetails;

@Repository
public interface AssignJobRepository extends JpaRepository<AssignJobDetails, Integer>{

}
