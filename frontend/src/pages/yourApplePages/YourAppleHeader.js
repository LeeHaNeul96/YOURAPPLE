import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import dummyData from '../../db/dummyData';
import YourAppleListMac from './YourAppleListMac';
import YourAppleListIpad from './YourAppleListIpad';
import YourAppleListIphone from './YourAppleListIphone';
import YourAppleListEtc from './YourAppleListEtc';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect ,useState} from 'react';


//mui 상단바 변경효과 이벤트
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}

    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
      
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}





export default function YourAppleHeader() {

  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const [yourAppleList , setYourAppleList] = useState([]);

  //판매 파트 리스트 불러오기
  useEffect(()=> {
    axios.get("/api/yourAppleList")
    .then(response => {
      setYourAppleList(response.data);
    })
    .catch(error => {
      console.log("ERROR : " + error + "리스트 불러오기 실패");
    })
    },[]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const writeForm = () => {
   navigate('/writeForm');
  }

  return (
<div >
    <Box sx={{ width: '100%' }}  >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered variant="fullWidth">
          <Tab label="Mac" {...a11yProps(0)} sx={{color : 'black'}}/>
          <Tab label="ipad" {...a11yProps(1)} sx={{color : 'black'}}/>
          <Tab label="iphone" {...a11yProps(2)} sx={{color : 'black'}}/>
          <Tab label="etc" {...a11yProps(3)} sx={{color : 'black'}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <YourAppleListMac images={yourAppleList}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <YourAppleListIpad images={yourAppleList}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <YourAppleListIphone images={yourAppleList}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <YourAppleListEtc images={yourAppleList}/>
      </CustomTabPanel>
      <img onClick={writeForm} style={{display: 'flex',position: 'fixed', width: 40 , marginLeft:500 , bottom: 70 ,cursor: 'pointer' }} src='/images/writeIcon.png'></img>
    </Box>
    </div>
  );
}