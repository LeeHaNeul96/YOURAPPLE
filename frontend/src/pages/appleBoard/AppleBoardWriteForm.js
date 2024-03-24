import style from '../../css/appleBoardWriteForm.module.css';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import RollBack from '../etc/RollBack';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function YourAppleWriteForm(){

  // mui 인풋버튼 디자인
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });



      const navigate = useNavigate();
      const [title, setTitle] = useState('');
      const [content, setContent] = useState('');
      const [id, setId] = useState('');
     
      
      //제목 변경 이벤트
      const handleTitleChange = (event) => {
          setTitle(event.target.value);
      };
      //내용변경  이벤트 
      const handleContentChange = (event) => {
          setContent(event.target.value);
      };


      //글쓰기 이벤트
      function SubmitBtn(){
          axios.post("/api/appleBoardWrite",null,{
           params  : {title : title , content : content , id : sessionStorage.getItem("id")}
         
          })
          .then(response => {
            navigate('/AppleBoard');
          })
          .catch(error => {
            alert("게시글 작성중 오류가 발생하였습니다.");
          }) 
       

       
      }
      

    return <div>
        <div className={style.mainBox}>
        <RollBack/>
            <div className={style.layOut}>
        <div className={style.writeFormText}>자유게시판 글쓰기</div>
         <TextField
          required
          id="title"
          label="제목"
          placeholder='100자 이하로 작성해주세요.'
          variant="standard"
          style={{width: '100%'}}
          value={title}
          onChange={handleTitleChange}
        />
         <TextField
          id="content"
          label="내용"
          multiline
          rows={10}
          placeholder='500자 이하로 작성해주세요.'
          variant="standard"
          fullWidth
          value={content}
          onChange={handleContentChange}
        />

        <div className={style.submitBtn}>
    <Button type='submit' onClick={SubmitBtn} variant="contained">게시하기</Button>
    </div>
        </div>
        </div>
    </div>
}