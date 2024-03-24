// Login.js
import React from 'react';
import { TextField, Button, Container } from '@mui/material';
import axios from 'axios'; 
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';



//로그인 이벤트
const Login = (event) => {

  const navigate = useNavigate();

  
  const [id , setId] = useState("");
  const [pw , setPw] = useState("");

  const onIdHandler = (event) =>{
    setId(event.target.value);
  }
  const onPwHandler = (event) =>{
    setPw(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let sessionStorage = window.sessionStorage;
    
     axios.post('/api/login', { id, pw })
       .then(response => { 
        alert("안녕하세요." + id + "님 환영합니다.")
       navigate(response.data);

    sessionStorage.setItem("id",  id);

       })
       .catch(error => {
         console.error('Error:', error);
         alert("로그인에 실패하였습니다.");
       });

    
  }

  return (
    <Container maxWidth="sm">
        <p style={{fontSize: 35 , fontWeight: 800}}>YOURAPPLE<br/> 로그인</p>
      <form onSubmit={onSubmitHandler}> 
        <TextField
          label="ID"
          variant="outlined"
          margin="normal"
          style={{ width: 200 }}
          onChange={onIdHandler} 
        />
        <br/>
        <TextField
          type="password"
          label="PASSWORD"
          variant="outlined"
          margin="normal"
          style={{ width: 200 }}
          onChange={onPwHandler} 
        /><br/><br/>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ width: 200 }}
                  > 
          LOGIN
        </Button>
      </form>
    </Container>
  );
};

export default Login;
