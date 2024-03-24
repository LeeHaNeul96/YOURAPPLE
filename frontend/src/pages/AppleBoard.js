
import AppleBoardList from "./appleBoard/AppleBoardList";

export default function AppleBoard(){
    return(
        <>
        
            <div style={{fontSize: 20 , fontWeight: 600 , marginBottom: 10}}>자유 게시판</div>
        <AppleBoardList/>
        </>
    );
}