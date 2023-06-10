package com.pcsgpl.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pcsgpl.entity.UserRole;

@Repository
public interface UserRoleRepository extends JpaRepository<UserRole, Integer>{

//	Optional<UserRole> findById(String userRole);

}
