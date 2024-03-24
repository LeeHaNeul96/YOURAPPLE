import React, { useEffect } from "react"
import RollBack from "../etc/RollBack"
import style from '../../css/yourAppleView.module.css';
import { useLocation,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


export default function YourAppleView(){
    
    const location =  useLocation();
    const navigate = useNavigate();
    const yourAppleNo = location.state.yourAppleNo;
    const [yourAppleView ,setYourAppleView] = useState("");


    //글 내용 불러오기
  useEffect(()=> {
    axios.get("/api/yourAppleView",{
        params: {
            yourAppleNo : yourAppleNo
        }
    })
    .then(response => {
      setYourAppleView(response.data);
    })
    .catch(error => {
      console.log("ERROR : " + error + "상품 불러오기 실패");
    })
    },[]);

    //업데이트 버튼
    function onClickUpdate() {
        navigate("/YourAppleUpdateForm", {
            state: { yourAppleNo: yourAppleNo }
        });
    }


    //글삭제 버튼
    function onClickDelete(){
        if(window.confirm("정말 삭제하시겠습니까?")){
        if(sessionStorage.getItem("id") === yourAppleView.id){
         
        axios.get('/api/yourAppleDelete',{
            params : {yourAppleNo : yourAppleNo
            }
        })
        .then(response => {
            console.log(response);
            alert("삭제가 완료 되었습니다.");
            navigate("/YourApple");
        }).catch(error =>{
            console.log("ERROR : " +error)
        })
            }else{
                        alert('자신의 게시글이 아닙니다.')
                    }
                }
                }
    

    return (
        <div>
        <RollBack/>
            <div className={style.mainBox}>
                <img className={style.imgBox} src={yourAppleView.imageAddress}/>
                <div className={style.writer}>{yourAppleView.id}</div>
                <div className={style.title}>{yourAppleView.title}</div>
                <div className={style.content}>
                    <div className={style.price}>{yourAppleView.price}원</div>
                    <div className={style.text}>
                    {yourAppleView.content}
                    </div>
                    <div className={style.tel}>tel : 010-1111-1111</div>
                </div>
                <div className={style.btn}>
                <button className={style.button} onClick={onClickUpdate} >수정</button>
                <button className={style.button} onClick={onClickDelete}>삭제</button>
                </div>
                

            </div>
        </div>
    )
}