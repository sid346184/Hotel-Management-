import React,{useState} from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import '../../styles/HeaderStyles.css'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'

const Header =()=>{
    const[mobileOpen,setMobileOpen]=useState(false)

    
    const handleDrawerToggle=()=>{
        setMobileOpen(!mobileOpen)
    }

    const drawer =(
        <Box onClick={handleDrawerToggle} sx={{textAlign:"center"}}>
                <Typography color={'gold'} component={'div'} variant='h5' sx={{flexGrow:1,my:2,bgcolor: "black",p:1}}>
                <FastfoodIcon  />
                  My Restaurant
                    </Typography>
                    <Divider/>
                        <ul className="mobile-navigation">
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/menu"}>Menu</Link>
                            </li>
                            <li>
                                <Link to={"/about"}>About</Link>
                            </li>
                            <li>
                                <Link to={"/contact"}>Contact</Link>
                            </li>
                        </ul>
        </Box>
    )
    return(
        <>
        <Box>
            <AppBar component={'nav'} sx={{bgcolor: "black"}}>
                <Toolbar>
                    <IconButton color="inherit" arial-aria-label='open-drawer' edge='start' sx={{mr:2,display:{sm: "none"},
                }} 
                onClick={handleDrawerToggle}
                >
                        <MenuIcon />
                    </IconButton>
                    <Typography color={'gold'} component={'div'} variant='h5' sx={{flexGrow:1}}>
                <FastfoodIcon  />
                  My Restaurant
                    </Typography>

                    <Box sx={{display:{xs:'none',sm:'block'}}}>
                        <ul className="navigation-menu">
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/menu"}>Menu</Link>
                            </li>
                            <li>
                                <Link to={"/about"}>About</Link>
                            </li>
                            <li>
                                <Link to={"/contact"}>Contact</Link>
                            </li>
                        </ul>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box component="nav">
                <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{
                    xs:'block',sm:'none'},"& .MuiDrawer-paper":{
                        boxSizing:'border-box',
                        width:'240px'
                    }}}>
                    {drawer}
                </Drawer>

            </Box>
            <Box>

            <Toolbar/>
            </Box>
        </Box>
        
        </>
    )
}

export default Header;