import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from 'react';
import axios from 'axios';


export default function AppleBoardList() {
    const navigate = useNavigate();
    const [appleBoardList , setAppleBoardList] = useState([]);

    

  
//리스트 가져오기
    useEffect(()=> {
    axios.get("/api/appleBoardList")
    .then(response => {
      setAppleBoardList(response.data);
    })
    .catch(error => {
      console.log("ERROR : " + error + "리스트 불러오기 실패");
    })
    },[]);


    const handleRowClick = (row) => {
      navigate(`/AppleBoardView`, { state: { appleBoardNo: row.appleBoardNo } });
      
    };

    function AppleBoardWriteForm(){
      navigate('/AppleBoardWriteForm');
    }
  
  return (
   
    <TableContainer component={Paper} style={{display: 'flex', flexDirection: 'column'}}>
      <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell align='center' >제목</TableCell>
            <TableCell align="center">작성자</TableCell>
            <TableCell align="center">게시일</TableCell>
          
          </TableRow>
        </TableHead>
       
        <TableBody >
          {appleBoardList.map((row) => (
            <TableRow
              key={row.AppleBoardNo}
              onClick={() => handleRowClick(row)}
              style={{ cursor: 'pointer' }}
            >
              {/*  <TableCell align="right">{row.boardNo}</TableCell> */}

              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.dates}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <img onClick={AppleBoardWriteForm} style={{display: 'flex',position: 'fixed', width: 40 , marginLeft:500 , bottom: 70 ,cursor: 'pointer' }} src='/images/writeIcon.png'></img>
      </Table>
    </TableContainer>
    
  );
}
