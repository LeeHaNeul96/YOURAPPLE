package com.appleProject.login.mapper;
import com.appleProject.login.vo.LoginVO;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;


@Mapper
@Repository
public interface LoginMapper {
	
    public LoginVO login(LoginVO loginVO);
    
}
