package com.pcsgpl.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pcsgpl.dto.AccountDetailsDto;
import com.pcsgpl.entity.AccountDetails;
import com.pcsgpl.repository.AccountDetailsRepository;

@Service
public class AccountDetailsServiceImpl implements AccoutDetailsService {
	
	@Autowired
	private AccountDetailsRepository repo;

	@Override
	public AccountDetails addAccountDetails(AccountDetails accountDetails) {
		return repo.save(accountDetails);
	}

	@Override
	public AccountDetails updateAccountDetails(AccountDetailsDto accountDetailsDto, Integer userId) {
		Optional<AccountDetails> findAccountById = repo.findById(userId);
		//AccountDetails ad = new AccountDetails();
		if (findAccountById.isPresent()) {
			findAccountById.get().setUserId(userId);
			findAccountById.get().setEmployeeId(accountDetailsDto.getEmployeeId());
			findAccountById.get().setPanNumber(accountDetailsDto.getPanNumber());
			findAccountById.get().setPrimaryBankAcNum(accountDetailsDto.getPrimaryBankAcNum());
			findAccountById.get().setSecondaryBankAcNum(accountDetailsDto.getSecondaryBankAcNum());
			AccountDetails updated = repo.save(findAccountById.get());
			return updated;
		}
		return findAccountById.get();
	}

	@Override
	public String deleteAccountDetails(Integer userId) {
		Optional<AccountDetails> findAccountById = repo.findById(userId);
		if(findAccountById.isPresent())
		{
			repo.deleteById(userId);
		}
		return "Deleted Successfully";
	}

}