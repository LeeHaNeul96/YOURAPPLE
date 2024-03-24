package com.appleProject.appleBoard.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.appleProject.appleBoard.vo.AppleBoardVO;

@Mapper
@Repository
public interface AppleBoardMapper {
	
	public List<AppleBoardVO> AppleBoardList();

	public AppleBoardVO AppleBoardView(Long appleBoardNo);

	public Integer AppleBoardWrite(String title, String content, String id);

	public Integer AppleBoardDelete(Long appleBoardNo);

	public Integer AppleBoardUpdate(Long appleBoardNo, String title, String content);
}
