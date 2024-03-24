import {useNavigate} from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

//롤백 버튼
export default function RollBack(){

    const navigate = useNavigate();
    const rollBack = () => {
        navigate(-1); 
    }
    return (
       <div onClick={rollBack} style={{cursor: 'pointer' , position: "fixed" , top: '30px', marginLeft: '10px'}}>
      <ArrowBackIosNewIcon  style={{ fontSize: 30 }} />
    </div>
    )
    }