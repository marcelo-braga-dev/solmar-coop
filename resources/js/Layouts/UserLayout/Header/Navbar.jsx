import React from 'react';
import {AppBar, Toolbar, IconButton, Box, Avatar, Typography, useMediaQuery} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ProfileMenu from "@/Layouts/UserLayout/Header/ProfileMenu.jsx";
import {IconArrowLeft} from "@tabler/icons-react";
import {useMenu} from "@/Layouts/UserLayout/Drawer/DrawerContext.jsx";

export default function Navbar({titlePage, backPage}) {
    const {toggleDrawerMenu} = useMenu();

    const btnBack = () => {
        window.history.back()
    }

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
            <Toolbar sx={{marginInline: 3, height: 50}}>
                <IconButton onClick={toggleDrawerMenu} edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                    <MenuIcon sx={{color: '#000'}}/>
                </IconButton>

                <Box sx={{display: 'flex', alignItems: 'center', width: 100, marginInlineEnd: 5}}>
                    <img src="/logo.png" alt="logo" loading="lazy" style={{width: '100%'}}/>
                </Box>
                <Box sx={{width: 50}}>
                    {backPage && <IconButton onClick={btnBack}><IconArrowLeft size={20}/></IconButton>}
                </Box>

                <Box sx={{flexGrow: 1}}> {titlePage && <Typography color="gray" variant="body1s">{titlePage}</Typography>}</Box>
                <Box sx={{flexGrow: 1}}/>

                <ProfileMenu/>

            </Toolbar>
        </AppBar>
    );
}
