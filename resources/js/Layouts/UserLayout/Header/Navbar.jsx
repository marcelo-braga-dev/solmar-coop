import React from 'react';
import {AppBar, Toolbar, IconButton, Box, Avatar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ProfileMenu from "@/Layouts/UserLayout/Header/ProfileMenu.jsx";

export default function Navbar() {
    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: '#fff',
                boxShadow: 'none',
                borderBottom: '1px solid #ddd',
                width: '100%',
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}
        >
            <Toolbar sx={{marginInlineEnd: 3}}>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                    <MenuIcon sx={{color: '#000'}}/>
                </IconButton>

                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <img src="/logo.png" alt="logo" style={{maxHeight: 40}}/>
                </Box>

                <Box sx={{flexGrow: 1}}/>

                <ProfileMenu/>

            </Toolbar>
        </AppBar>
    );
}
