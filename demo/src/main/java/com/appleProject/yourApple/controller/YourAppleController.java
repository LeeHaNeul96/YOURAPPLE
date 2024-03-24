package com.appleProject.yourApple.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.appleProject.yourApple.service.YourAppleService;
import com.appleProject.yourApple.vo.YourAppleVO;

@RestController
@ComponentScan(basePackages= {"com.appleProject"})
@MapperScan(basePackages= {"com.appleProject"})
public class YourAppleController {
	
	
	@Autowired
	private YourAppleService service;
	
	
	
	
	@PostMapping("/fileUpload")
	public String fileUpload(@RequestParam("file") MultipartFile file , YourAppleVO vo ) {
		
		System.out.println("fileUploadController - 시작 file : " +file.getOriginalFilename());
		System.out.println("넘어오는 데이터 vo : " +vo);
		String imageAddress = "/upload/" + file.getOriginalFilename();
		String uploadDir = "/Users/ihaneul/Desktop/React/frontend/public/upload";
		File uploadFile = new File(uploadDir + "/" + file.getOriginalFilename());
		try {
            file.transferTo(uploadFile);
            System.out.println("로컬에 업로드 완료 로컬완료 주소 : " +uploadFile);
            vo.setImageAddress(imageAddress);
           System.out.println("이미지 주소 : "+imageAddress);
            service.fileUpload(vo);
            
            return "파일 업로드 완료";
        } catch (IOException e) {
            e.printStackTrace();
            return "파일 업로드 실패";
        }
		
	}
	

	
	@GetMapping("/api/yourAppleList")
	public List<YourAppleVO> yourAppleList(){
		 List<YourAppleVO> vo = service.yourAppleList();
		 System.out.println(vo);
		return vo;
	}
	
	
	@GetMapping("/api/yourAppleView")
	public YourAppleVO yourAppleView(Long yourAppleNo) {
		System.out.println("yourAppleView : " + yourAppleNo);
		YourAppleVO vo  = service.yourAppleView(yourAppleNo);
		System.out.println("상품 불러오기 결과  vo = "+vo);
		
		return vo;
	}
	
	@GetMapping("/api/yourAppleUpdateForm")
	public YourAppleVO yourAppleUpdateForm(Long yourAppleNo) {
		System.out.println("yourAppleUpdateForm - 게시글 가져오기");
		YourAppleVO vo = service.yourAppleView(yourAppleNo);
		System.out.println("게시글 정보 가져오기" +vo);
	
		return vo;
	}
	
	@PostMapping("/yourAppleUpdate")
	public Integer yourAppleUpdate(@RequestParam("file") MultipartFile file ,YourAppleVO vo) {
		System.out.println("넘어가는 데이터 : "+vo);
		
		
		System.out.println("fileUploadController - 시작 file : " +file.getOriginalFilename());
		System.out.println("넘어오는 데이터 vo : " +vo);
		String imageAddress = "/upload/" + file.getOriginalFilename();
		String uploadDir = "/Users/ihaneul/Desktop/React/frontend/public/upload";
		File uploadFile = new File(uploadDir + "/" + file.getOriginalFilename());
		try {
            file.transferTo(uploadFile);
            System.out.println("로컬에 업로드 완료 로컬완료 주소 : " +uploadFile);
            vo.setImageAddress(imageAddress);
           System.out.println("이미지 주소 : "+imageAddress);
           
           String deleteImageData = service.yourAppleView(vo.getYourAppleNo()).getImageAddress();
           System.out.println("삭제되는 이미지 주소 : " + deleteImageData);
           File deleteImageFile =  new File(uploadDir + deleteImageData);
           System.out.println(deleteImageFile.exists());
           if(deleteImageFile.exists()) {
        	   deleteImageFile.delete();
        	   System.out.println("기존파일 삭제완료");
           }
           
           
           Integer result = service.yourAppleUpdate(vo);
           System.out.println("결과값 : " + result);
            
            return 1;
        } catch (IOException e) {
            e.printStackTrace();
            return 0;
        }
	}
	
	
	
	@GetMapping("/api/yourAppleDelete")
	public String yourAppleDelete(Long yourAppleNo) {
		System.out.println("삭제되는 yourAppleNo = " + yourAppleNo);
		
		String deleteImageData = service.yourAppleView(yourAppleNo).getImageAddress();
	System.out.println(deleteImageData);
	String uploadDir = "/Users/ihaneul/Desktop/React/frontend/public";
        File deleteImageFile =  new File(uploadDir + deleteImageData);
        System.out.println(deleteImageFile.exists());
        if(deleteImageFile.exists()) {
     	   deleteImageFile.delete();
     	   System.out.println("기존파일 삭제완료");
        }
		service.yourAppleDelete(yourAppleNo);
		return "삭제성공";
		
	}
	
	

}
