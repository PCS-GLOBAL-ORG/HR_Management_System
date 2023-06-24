package com.pcsgpl.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pcsgpl.entity.AccountDetails;

public interface AccountDetailsRepository extends JpaRepository<AccountDetails, Integer> {

}
