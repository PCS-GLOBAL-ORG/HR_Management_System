package com.pcsgpl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pcsgpl.entity.JobDetails;

@Repository
public interface JobDetailsRepository extends JpaRepository<JobDetails, Integer>{

}
