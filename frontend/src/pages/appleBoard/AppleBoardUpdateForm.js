import style from '../../css/appleBoardWriteForm.module.css';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import RollBack from '../etc/RollBack';
import { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


export default function YourAppleWriteForm(){

  
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
      const location = useLocation();
      const updateTitle = location.state.title;
      const updateContent = location.state.content;
      const appleBoardNo = location.state.appleBoardNo;

      const navigate = useNavigate();
      const [title, setTitle] = useState(updateTitle);
      const [content, setContent] = useState(updateContent);
      const [id, setId] = useState('');


    
       
     
      
      //타이틀 저장
      const handleTitleChange = (event) => {
          setTitle(event.target.value);
      };
      // 내용 저장
      const handleContentChange = (event) => {
          setContent(event.target.value);
      };


      //수정하기 버튼
      function SubmitBtn(){
        axios.post("/api/appleBoardUpdate" ,null, {
            params : {appleBoardNo : appleBoardNo , title :  title ,  content : content}
        })
            
        .then(response => {
            navigate("/AppleBoard");

        })
        .catch(error => {
            console.log("ERROR : " + error);
        })
    ;
       

       
      }
      

    return <div>
        <div className={style.mainBox}>
        <RollBack/>
            <div className={style.layOut}>
        <div className={style.writeFormText}>자유게시판 글 수정하기</div>
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