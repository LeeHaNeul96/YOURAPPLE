package com.appleProject.yourApple.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appleProject.yourApple.mapper.YourAppleMapper;
import com.appleProject.yourApple.vo.YourAppleVO;

@Service
public class YourAppleService {
	
	
	
	@Autowired
	private YourAppleMapper mapper;
	
	public Integer fileUpload(YourAppleVO vo) {
		mapper.yourAppleWrite(vo);	
		Long lastYourAppleNo = mapper.lastYourAppleNo();
		System.out.println(lastYourAppleNo);
		vo.setLastYourAppleNo(lastYourAppleNo); 
		return mapper.fileUpload(vo);
	}
	
	public List<YourAppleVO> yourAppleList() {
		return mapper.yourAppleList();
	}

	public YourAppleVO yourAppleView(Long yourAppleNo) {
		// TODO Auto-generated method stub
		return mapper.yourAppleView(yourAppleNo);
	}

	public Integer fileUploadUpdate(YourAppleVO vo) {
		// TODO Auto-generated method stub
		return mapper.fileUploadUpdate(vo);
		
	}

	public Integer yourAppleUpdate(YourAppleVO vo) {
		// TODO Auto-generated method stub
		mapper.uploadFileUpdate(vo); 
		return mapper.yourAppleUpdate(vo);
	}

	public Integer yourAppleDelete(Long yourAppleNo) {
		// TODO Auto-generated method stub
		mapper.yourAppleImageDelete(yourAppleNo);
		return mapper.yourAppleDelete(yourAppleNo);
		
	}

	
}
