import React from 'react'
import {Box, Typography} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:"center",bgcolor:"#1A1A19",color:"white",p:3}}>
        <Box sx={{my:3,"& svg":{
            fontSize:"60px",
            cursor:"pointer",
            mr:"2",
            },
            "& svg:hover":{
                color:'gold',
                transform:'translateY(-5px)',
                transition:"all 400ms",
            }
            }}>
            <InstagramIcon/>
            <TwitterIcon/>
            <GitHubIcon/>
        </Box>
        <Typography>
            All Rights Reserved &copy; Siddhant Gupta
        </Typography>
    </Box>
    </>
  )
}

export default Footer
