package com.appleProject.main.controller;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.appleProject.login.service.*;
import com.appleProject.login.vo.*;;




@RestController
@ComponentScan(basePackages= {"com.appleProject.*"})
@MapperScan(basePackages= {"com.appleProject.*"})
public class Controller {


    @Autowired
    private LoginService loginService;

    @PostMapping("/api/login")
    public ResponseEntity<String> Login(@RequestBody LoginVO loginVO){

    	
    	String id = loginVO.getId();
    	String pw = loginVO.getPw();
    	System.out.println("로그인 중 id: " + id +"pw: " +pw );
    	
    	
    	if(loginService.login(loginVO) != null) {
    		System.out.println("로그인 성공결과"+loginService.login(loginVO));
    		return ResponseEntity.ok("/YourApple");
        
    	}else {
    		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");

    	}

        
      


        
    }
    
}
