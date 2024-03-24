package com.appleProject.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.appleProject.login.mapper.*;
import com.appleProject.login.vo.LoginVO;

@Service
public class LoginService {

@Autowired
private LoginMapper mapper;

    public LoginVO login(LoginVO loginVO) {
    System.out.println(loginVO);
        return mapper.login(loginVO);
    }
    
}
