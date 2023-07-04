package com.pcsgpl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pcsgpl.entity.CountryDetails;

@Repository
public interface CountryDetailsRepository extends JpaRepository<CountryDetails, Integer>{

}
