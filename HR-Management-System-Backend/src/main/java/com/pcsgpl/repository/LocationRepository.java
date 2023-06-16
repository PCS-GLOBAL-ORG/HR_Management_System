package com.pcsgpl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pcsgpl.entity.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {

}
