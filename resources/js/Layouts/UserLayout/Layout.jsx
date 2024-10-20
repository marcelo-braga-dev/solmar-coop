import React from 'react';
import SideMenu from "./Drawer/DrawerMenu.jsx";
import {MenuProvider} from "./Drawer/DrawerContext.jsx";
import Navbar from "./Header/Navbar.jsx";
import {Container, IconButton, Stack, Typography} from "@mui/material";
import {Head} from "@inertiajs/react";
import {useActiveMenu} from "@/Utils/Drawer/activeMenuUtils.jsx";
import {IconArrowLeft} from "@tabler/icons-react";

const Layout = ({titlePage, menu, subMenu, backPage, children}) => {

    useActiveMenu(titlePage, menu, subMenu)

    return (
        <MenuProvider menu={menu} subMenu={subMenu}>
            <Head title={titlePage ?? ''}/>
            <Navbar titlePage={titlePage ?? ''} backPage={backPage}/>
            <div style={{display: 'flex', backgroundColor: '#fcfcfc'}}>
                <SideMenu/>
                <div style={{
                    flexGrow: 1,
                    marginTop: 90,
                    paddingInline: 20,
                    overflow: 'hidden',
                }}>
                    <Container maxWidth="lg" style={{
                        overflowY: 'auto',
                        padding: 0,
                    }}>
                        <div style={{
                            marginBottom: 50,
                            overflowX: 'auto',
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
