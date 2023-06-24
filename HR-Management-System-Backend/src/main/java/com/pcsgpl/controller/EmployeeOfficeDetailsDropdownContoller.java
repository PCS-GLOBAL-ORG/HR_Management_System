package com.pcsgpl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pcsgpl.entity.BaseBranch;
import com.pcsgpl.entity.ParentDetails;
import com.pcsgpl.entity.SubIou;
import com.pcsgpl.entity.Supervisor;
import com.pcsgpl.entity.TpcsGrade;
import com.pcsgpl.entity.TpcsLocation;
import com.pcsgpl.repository.BaseBranchRepository;
import com.pcsgpl.repository.ParentDetailsRepository;
import com.pcsgpl.repository.SubIouRepository;
import com.pcsgpl.repository.SupervisorRepository;
import com.pcsgpl.repository.TpcsGradeRepository;
import com.pcsgpl.repository.TpcsLocationRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/officeDetails")
public class EmployeeOfficeDetailsDropdownContoller {

	@Autowired
	private SubIouRepository subIou;
	@Autowired
	private SupervisorRepository supervisor;
	@Autowired
	private TpcsGradeRepository tpcsGrade;
	@Autowired
	private TpcsLocationRepository tpcsLocation;
	@Autowired
	private ParentDetailsRepository parentDetails;
	@Autowired
	private BaseBranchRepository baseBranch;
	
	
	@GetMapping("/parentDetails")
	public List<ParentDetails> getAllParentDetails(){
		return parentDetails.findAll();
	}
	
	@GetMapping("/subIou")
	public List<SubIou> getAllSubIou(){
		return subIou.findAll();
	}
	
	@GetMapping("/supervisor")
	public List<Supervisor> getAllSupervisor(){
		return supervisor.findAll();
	}
	
	@GetMapping("/tpcsGrade")
	public List<TpcsGrade> getAllTpcsGrade(){
		return tpcsGrade.findAll();
	}
	
	@GetMapping("/tpcsLocation")
	public List<TpcsLocation> getAllTpcsLocation(){
		return tpcsLocation.findAll();
	}
	
	@GetMapping("/baseBranch")
	public List<BaseBranch> getAllBaseBranch(){
		return baseBranch.findAll();
	}
}
