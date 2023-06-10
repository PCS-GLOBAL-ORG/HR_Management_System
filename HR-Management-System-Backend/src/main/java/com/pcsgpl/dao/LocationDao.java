package com.pcsgpl.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pcsgpl.entity.Location;

@Repository
public interface LocationDao extends JpaRepository<Location, Integer> {

}
