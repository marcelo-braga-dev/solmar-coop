import React from 'react';
import SideMenu from "./Drawer/DrawerMenu.jsx";
import {MenuProvider} from "./Drawer/DrawerContext.jsx";
import Navbar from "./Header/Navbar.jsx";
import {Container} from "@mui/material";
import {Head, usePage} from "@inertiajs/react";
import {useActiveMenu} from "@/Utils/Drawer/activeMenuUtils.jsx";
import {SnackbarProvider} from "@/Contexts/Alerts/SnackbarProvider.jsx";

const Layout = ({titlePage, menu, subMenu, backPage, children}) => {

    const alert = usePage().props.alert

    useActiveMenu(titlePage, menu, subMenu)

    return (
        <MenuProvider menu={menu} subMenu={subMenu}>
            <SnackbarProvider initialAlert={alert}>
                <Head title={titlePage ?? ''}/>
                <Navbar titlePage={titlePage ?? ''} backPage={backPage}/>
                <div style={{display: 'flex', backgroundColor: '#f5f5f5'}}>
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
                            minHeight: 'calc(100vh - 90px)'
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
            </SnackbarProvider>
        </MenuProvider>
    );
};

export default Layout;
