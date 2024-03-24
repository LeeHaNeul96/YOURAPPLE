import * as React from 'react';
import style from '../../css/wirteForm.module.css';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from 'react-router-dom';
import RollBack from '../etc/RollBack';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function YourAppleWriteForm(){
    

  //mui 인풋 디자인
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
    const [file , setFile] = useState('');
    const [title , setTitle] = useState('');
    const [price , setPrice] = useState('');
    const [content , setContent] = useState('');
    const [divisionNo , setDivisionNo] = useState(1);
    const [fileName, setFileName] = useState('');



    //파일 체인지시 임시서장 이벤트
    const fileChange = (event) => {
      const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setFile(file);
    } else {
      setFile('');
      setFileName('');
    }
    };

    //제목변경 이벤트
    const titleChange = (event) => {
      setTitle(event.target.value);
    };
    //내용저장 이벤트
  const contentChange = (event) => {
    setContent(event.target.value); 
};
//가격저장 이벤트
const priceChange = (event) => {
  setPrice(event.target.value);
};
//내용저장 이벤트
const divisionChange = (event) => {
  setDivisionNo(event.target.value);
};



//파일업로드 업로드 이벤트
    const fileUpload = () => {
      //파일내용 변수선언
      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', title);
      formData.append('price', price);
      formData.append('content', content);
      formData.append('id', sessionStorage.getItem("id"));
      formData.append('divisionNo', divisionNo);
      //변수 저장후 업로드
      axios.post('/fileUpload', formData)
        .then(response => {
          alert("성공적으로 게시되었습니다.");
          navigate("/YourApple")
        })
        .catch(error => {
          console.error('Error uploading file:', error );
         
        });
    };
  
      

    return <div>
      <RollBack/>
        <div className={style.mainBox}>
            <div className={style.layOut}>
        <div className={style.writeFormText}>나의 애플 올리기</div>
         <TextField
          required
          id="title"
          label="제목"
          placeholder='100자 이하로 작성해주세요.'
          variant="standard"
          style={{width: '100%'}}
          onChange={titleChange}
          
          
        />
        <TextField
          required
          id="price"
          label="가격"
          placeholder='ex)100000'
          variant="standard"
          style={{width: '100%'}}
          onChange={priceChange}
        />
        
         <TextField
          id="content"
          label="내용"
          multiline
          rows={10}
          placeholder='500자 이하로 작성해주세요.'
          variant="standard"
          fullWidth
          onChange={contentChange}
         
        />
        
        <Box sx={{ minWidth: 400 ,paddingTop : 4 }}>
      <FormControl >
        <InputLabel id="demo-simple-select-label">카테고리</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={divisionNo}
          label="Age"
          onChange={divisionChange}
        >
          <MenuItem value={1}>Mac</MenuItem>
          <MenuItem value={2}>Ipad</MenuItem>
          <MenuItem value={3}>Iphone</MenuItem>
          <MenuItem value={4}>ETC</MenuItem>
        </Select>
      </FormControl>
         </Box>

        <div className={style.fileUproad}>
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      사진 업로드
      <VisuallyHiddenInput type="file" onChange={fileChange} />
    </Button>
    <span> {fileName}</span>
    </div>

        <div className={style.submitBtn}>
    <Button onClick={fileUpload} variant="contained">게시하기</Button>
    </div>
        </div>
        </div>
    </div>
}