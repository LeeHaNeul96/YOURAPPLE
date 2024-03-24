import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import YourApple from '@mui/icons-material/Storefront';
import AppleBoard from '@mui/icons-material/DriveFileRenameOutline';
import MyAppleIcon from '@mui/icons-material/DehazeOutlined';


export default function Footer(){
    const [value, setValue] = React.useState(0);

    return (
      
      <Box sx={{ width: '100%',position:"fixed", bottom: 0 , paddingX: 'auto' , left: 0, right: 0 }}>
        <BottomNavigation
          showLabels
          value={value} 
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction component={Link} to="/YourApple" label="YourApple" icon={<YourApple />} />
          <BottomNavigationAction component={Link} to="/AppleBoard" label="AppleBoard" icon={<AppleBoard />} />
          <BottomNavigationAction component={Link} to="/MyApple" label="MyApple" icon={<MyAppleIcon />} />
        </BottomNavigation>
      </Box>
    )
}