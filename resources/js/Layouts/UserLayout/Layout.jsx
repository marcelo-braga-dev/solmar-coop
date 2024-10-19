import React from 'react';
import SideMenu from "./Drawer/DrawerMenu.jsx";
import {MenuProvider} from "./Drawer/DrawerContext.jsx";
import Navbar from "./Header/Navbar.jsx";
import {Container, IconButton, Stack, Typography} from "@mui/material";
import {Head} from "@inertiajs/react";
import {useActiveMenu} from "@/Utils/Drawer/activeMenuUtils.jsx";
import {IconArrowLeft} from "@tabler/icons-react";

const Layout = ({titlePage, menu, subMenu, back, children}) => {

    useActiveMenu(titlePage, menu, subMenu)

    const btnBack = () => {
        window.history.back()
    }

    return (
        <MenuProvider menu={menu} subMenu={subMenu}>
            <Head title={titlePage ?? ''}/>
            <Navbar/>
            <div style={{display: 'flex', backgroundColor: '#fcfcfc'}}>
                <SideMenu/>
                <div style={{
                    flexGrow: 1,
                    marginTop: 90,
                    paddingInline: 20,
                    overflow: 'hidden',
                }}>
                    <Container maxWidth="lg" style={{
                        overflowY: 'auto', // Permite scroll vertical
                        padding: 0,
                    }}>
                        <Stack direction="row" justifyContent="space-between" style={{ padding: '20px' }}>
                            {titlePage && <Typography marginBottom={2} variant="h5">{titlePage}</Typography>}
                            {back && <IconButton onClick={btnBack}><IconArrowLeft/></IconButton>}
                        </Stack>

                        <div style={{
                            marginBottom: 50,
                            // height: 'calc(100vh - 200px)', // Altura dinâmica considerando header e margens
                            overflowX: 'auto',
                            // padding: '10px',
                        }}>
                            {children}
                        </div>
                    </Container>
                </div>
            </div>
        </MenuProvider>
    );
};

export default Layout;
