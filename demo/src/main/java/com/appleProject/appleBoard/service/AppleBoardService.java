package com.appleProject.appleBoard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appleProject.appleBoard.mapper.AppleBoardMapper;
import com.appleProject.appleBoard.vo.AppleBoardVO;


@Service
public class AppleBoardService {
	
	
	@Autowired
	private AppleBoardMapper appleBoardMapper;
	
	public List<AppleBoardVO> AppleBoardList(){
		
		return appleBoardMapper.AppleBoardList();
	}

	public AppleBoardVO AppleBoardView(Long appleBoardNo) {
		
		return appleBoardMapper.AppleBoardView(appleBoardNo);
	}

	public Integer AppleBoardWrite(String title, String content, String id) {
		 System.out.println("title : " + title +"content : " + content + "id : " +id);
		 
		return appleBoardMapper.AppleBoardWrite(title , content,id);
	}
	public Integer AppleBoardDelete(Long appleBoardNo) {
		return appleBoardMapper.AppleBoardDelete(appleBoardNo);
	}

	public Integer AppleBoardUpdate(Long appleBoardNo, String title, String content) {
		// TODO Auto-generated method stub
		return appleBoardMapper.AppleBoardUpdate(appleBoardNo , title ,content);
		
	}

}
