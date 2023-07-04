package com.pcsgpl.service;

import com.pcsgpl.dto.AccountDetailsDto;
import com.pcsgpl.entity.AccountDetails;

public interface AccoutDetailsService {
	
	public AccountDetails addAccountDetails(AccountDetails accountDetails);
	
	public AccountDetails updateAccountDetails(AccountDetailsDto accountDetailsDto, Integer userId);

	public String deleteAccountDetails(Integer userId);

}