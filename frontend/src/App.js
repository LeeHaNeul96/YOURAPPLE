import React from "react";
import {Route , Routes} from "react-router-dom";
import MainContainer from "./pages/MainContainer";
import { Navigate } from "react-router-dom";


function App() {
 
  return (
    
  <>
  
    <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/*" element={<MainContainer/>}/>
    </Routes>
 
  
  </>
  );

}

export default App;