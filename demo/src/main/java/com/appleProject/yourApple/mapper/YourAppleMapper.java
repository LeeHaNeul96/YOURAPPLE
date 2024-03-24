package com.appleProject.yourApple.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.appleProject.yourApple.vo.YourAppleVO;

@Mapper
@Repository
public interface YourAppleMapper {
	
	public Integer fileUpload(YourAppleVO vo);

	public Integer yourAppleWrite(YourAppleVO vo);

	public Long lastYourAppleNo();

	public List<YourAppleVO> yourAppleList();

	public YourAppleVO yourAppleView(Long yourAppleNo);

	public Integer fileUploadUpdate(YourAppleVO vo);

	public Integer yourAppleUpdate(YourAppleVO vo);

	public Integer uploadFileUpdate(YourAppleVO vo);

	public Integer yourAppleDelete(Long yourAppleNo);

	public Integer yourAppleImageDelete(Long yourAppleNo);


	

}
