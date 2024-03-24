import Header from "./Header";
import Footer from "./Footer";
import { Route,Routes } from "react-router-dom";
import YourApple from "./YourApple";
import MyApple from "./MyApple";
import AppleBoard from "./AppleBoard";
import YourAppleView from "./yourApplePages/YourAppleView";
import AppleBoardView from "./appleBoard/AppleBoardView";
import WriteForm from "./yourApplePages/WriteForm";
import AppleBoardWriteForm from "./appleBoard/AppleBoardWriteForm";
import AppleBoardUpdateForm from "./appleBoard/AppleBoardUpdateForm"
import YourAppleUpdateForm from "./yourApplePages/YourAppleUpdateForm";



export default function LayOut(){

return (
        <div>
            <Header/>
                <Routes>
                    <Route path="/YourApple" element={<YourApple/>}/>
                    <Route path="/AppleBoard" element={<AppleBoard/>}/>
                    <Route path="/MyApple" element={<MyApple/>}/>
                    <Route path="/YourAppleView" element={<YourAppleView/>}/>
                    <Route path="/AppleBoardView" element={<AppleBoardView/>}/>
                    <Route path="/writeForm" element={<WriteForm/>}/>
                    <Route path="/AppleBoardWriteForm" element={<AppleBoardWriteForm/>}/>
                    <Route path="/AppleBoardUpdateForm" element={<AppleBoardUpdateForm/>}/>
                    <Route path="/YourAppleUpdateForm" element={<YourAppleUpdateForm/>}/>
                    
                </Routes>
            <Footer/>
        </div>
);
}