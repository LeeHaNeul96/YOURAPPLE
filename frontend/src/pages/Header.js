import style from "../css/main.module.css";
import { useLocation } from 'react-router-dom';


export default function Header(){
    const location = useLocation();
    if (location.pathname === '/MyApple' || location.pathname === '/YourAppleView') {
        return null;
      }

    return(
            <div style={{position: "sticky" , top: 0}}>
            <div><img className={style.appleLogo} src="/img/appleLogo.png"/></div>
            <div> <img className={style.logo} src="/img/logo.png"/></div>
            </div>

    )

}