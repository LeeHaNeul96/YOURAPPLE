
import RollBack from "../etc/RollBack";
import { useLocation } from "react-router-dom";

import style from "../../css/appleBoardView.module.css";
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";




export default function AppleBoardView(){

    const location = useLocation();
    const Navigate = useNavigate();
    const  appleBoardNo  = location.state.appleBoardNo;
    const [appleBoardView , setAppleBoardView] = useState();


    //view 가져오기
    useEffect(() => {
        axios.get("/api/appleBoardView" , {
            params : {appleBoardNo : appleBoardNo}
        })
        .then(response => {
            setAppleBoardView(response.data);    
        })
        .catch(error => {
            console.log("ERROR : " + error);
        })
    },[appleBoardNo]);


    //업데이트 버튼 이벤트
    function onClickUpdate(){
        if(sessionStorage.getItem("id") == appleBoardView.id){
            Navigate("/AppleBoardUpdateForm",{
                state:{
                    title : appleBoardView.title,
                    content : appleBoardView.content,
                    appleBoardNo : appleBoardNo
                }
            });
        
        }else{
            alert("본인의 게시글이 아닙니다.");
        }
    }

    //삭제버튼 이벤트
    function onClickDelete(){
       if(sessionStorage.getItem("id") == appleBoardView.id){
        if(window.confirm("정말 삭제하시겠습니까?")){
            axios.post("/api/appleBoardDelete" ,null, { 
                params : {appleBoardNo : appleBoardNo}
            })
            .then(response => {
                Navigate("/AppleBoard")
               
            })
            .catch(error => {
                console.log("ERROR : " + error);
            })
        ;
       }else{
        alert("삭제가 취소되었습니다.");
       }
        
       }else{
        alert("본인의 게시글이 아닙니다.")
       }
    }

    

    


    return (
        <div>
            
            <RollBack/> 
            <div className={style.mainBox}>
                {appleBoardView && (
                    <>
                 <div className={style.title}>{appleBoardView.title}</div>
                <div className={style.date}>{appleBoardView.dates}</div>
                <div className={style.date}>{appleBoardView.id}</div>
                <div className={style.content}>{appleBoardView.content}</div> 

                <div className={style.btn}>
                <button className={style.button} onClick={onClickUpdate}>수정</button>
                <button className={style.button} onClick={onClickDelete}>삭제</button>
                </div>
                </>
                    )}
            </div>

            
            
        </div>
    )
}