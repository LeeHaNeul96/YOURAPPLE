package com.appleProject.appleBoard.controller;



import java.util.List;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.appleProject.appleBoard.vo.AppleBoardVO;
import com.appleProject.appleBoard.service.AppleBoardService;




@RestController
@ComponentScan(basePackages= {"com.appleProject.*"})
@MapperScan(basePackages= {"com.appleProject.*"})
public class AppleBoardController {

	@Autowired
	private AppleBoardService appleBoardService;	
	
	
	@GetMapping("/api/appleBoardList")
	public List<AppleBoardVO> AppleBoardList(){
		
		System.out.println("AppleBoardList - 실행 ");
		List<AppleBoardVO> appleBoardList = appleBoardService.AppleBoardList();
		System.out.println(appleBoardList); 
		
		return appleBoardList;
	}
	
	@GetMapping("/api/appleBoardView")
	public AppleBoardVO AppleBoardView(Long appleBoardNo) {
		System.out.println("AppleBoardView - 실행 ");
		System.out.println("appleBoardNo = " + appleBoardNo);
		AppleBoardVO appleBoardView = appleBoardService.AppleBoardView(appleBoardNo);
		
		
		return appleBoardView;
	}
	
	@PostMapping("/api/appleBoardWrite")
	public Integer AppleBoardWrite(String title, String content,String id) {
		System.out.println("AppleBoardWrite - 실행 ");
		System.out.println("title  = " + title);
		System.out.println("content = " + content);
		System.out.println("id = " + id);
		Integer appleBoardView = appleBoardService.AppleBoardWrite(title,content,id);
		
		
		return appleBoardView;
	}
	
	@PostMapping("/api/appleBoardUpdate")
	public Integer AppleBoardUpdate(Long appleBoardNo , String title, String content) {
		System.out.println("appleBoardNo   : "  + appleBoardNo);
		System.out.println("title  : "  + title);
		System.out.println("content   : "  + content);
		appleBoardService.AppleBoardUpdate(appleBoardNo, title,content);
		
		
		return 1;
	}
	
	@PostMapping("/api/appleBoardDelete")
	public Integer AppleBoardDelete(Long appleBoardNo) {
		System.out.println("appleBoardDelete - 실행 appleBoardNo : " + appleBoardNo);
		
		appleBoardService.AppleBoardDelete(appleBoardNo);
		
		return 1;
	}


 
    
}
