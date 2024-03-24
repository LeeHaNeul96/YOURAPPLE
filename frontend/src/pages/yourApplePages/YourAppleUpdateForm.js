import * as React from 'react';
import style from '../../css/wirteForm.module.css';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useLocation, useNavigate } from 'react-router-dom';
import RollBack from '../etc/RollBack';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export default function YourAppleWriteForm(){
    const location = useLocation();
    const yourAppleNo = location.state.yourAppleNo;


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
    const [file , setFile] = useState(null);
    const [title , setTitle] = useState(null);
    const [price , setPrice] = useState(null);
    const [content , setContent] = useState(null);
    const [divisionNo , setDivisionNo] = useState(1);
    const [fileName, setFileName] = useState('');


    //파일 저장 이벤트
    const fileChange = (event) => {
      const file = event.target.files[0];
    if (file) {
        setFile(file);
      setFileName(file.name);
    } else {
        setFile('');
      setFileName('');
    }
    };
    const titleChange = (event) => {
      setTitle(event.target.value);
     
  };
  const contentChange = (event) => {
    setContent(event.target.value); 
};
const priceChange = (event) => {
  setPrice(event.target.value);
};
const divisionChange = (event) => {
  setDivisionNo(event.target.value);
};




    const fileUpload = () => {
      
      //파일및 내용 저장 변수선언
      const formData = new FormData();
      formData.append('title', title);
      formData.append('price', price);
      formData.append('content', content);
      formData.append('divisionNo', divisionNo);
      formData.append('yourAppleNo' , yourAppleNo);
      formData.append('file',file);
      
      
  
      //수정 업데이트 이벤트
      axios.post('/yourAppleUpdate', formData)
        .then(response => {
          alert("성공적으로 게시되었습니다.");
          navigate("/YourApple")
        })
        .catch(error => {
          console.error('ERROR : ', error);
         
        });
    };

    

    //업데이트 이벤트
    React.useEffect(()=>{
        axios.get("/api/yourAppleUpdateForm", {
            params : {yourAppleNo: yourAppleNo }
        })
        .then(response =>{
            const data = response.data;
            setTitle(data.title);
            setContent(data.content);
            setPrice(data.price);
            
        })
        .catch(error =>{
            console.log("ERROR : " +error)
        })
        
        
        
    },[yourAppleNo])
  
      

    return <div>
      <RollBack/>
        <div className={style.mainBox}>
            <div className={style.layOut}>
        <div className={style.writeFormText}>나의 애플 수정하기</div>
         <TextField
          required
          id="title"
          label="제목"
          placeholder='100자 이하로 작성해주세요.'
          variant="standard"
          style={{width: '100%'}}
          onChange={titleChange}
          value={title}
          InputLabelProps={{ shrink: true }} 
          
        />
        <TextField
          required
          id="price"
          label="가격"
          placeholder='ex)100000'
          variant="standard"
          style={{width: '100%'}}
          onChange={priceChange}
          value={price}
          InputLabelProps={{ shrink: true }} 
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
          value={content}
          InputLabelProps={{ shrink: true }} 
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
      사진변경하기
      <VisuallyHiddenInput type="file" onChange={fileChange} />
    </Button>
    <span> {fileName}</span>
    </div>

        <div className={style.submitBtn}>
    <Button onClick={fileUpload} variant="contained">수정하기</Button>
    </div>
        </div> 
        </div>
    </div>
}