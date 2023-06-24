package com.pcsgpl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pcsgpl.dto.AccountDetailsDto;
import com.pcsgpl.entity.AccountDetails;
import com.pcsgpl.service.AccoutDetailsService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/accounts")
public class AccountDetailsController {
	
	@Autowired
	private AccoutDetailsService accoutDetailsService;
	
	@PostMapping("/account")
	public AccountDetails saveAccount(@RequestBody AccountDetails accountDetails) {
		return accoutDetailsService.addAccountDetails(accountDetails);
	}
	
	@PutMapping("/account/{userId}")
	public AccountDetails updateAccount(@RequestBody AccountDetailsDto accountDetailsDto, @PathVariable("userId") Integer userId) {
		return  accoutDetailsService.updateAccountDetails(accountDetailsDto, userId);
	}
	@DeleteMapping("/account/{userId}")
	public String deleteAccount(@PathVariable("userId") Integer userId) {
		return  accoutDetailsService.deleteAccountDetails(userId);
	}

}