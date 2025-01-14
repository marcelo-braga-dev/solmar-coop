import React from 'react';
import SideMenu from "./Drawer/DrawerMenu.jsx";
import {MenuProvider} from "./Drawer/DrawerContext.jsx";
import Navbar from "./Header/Navbar.jsx";
import {Head, usePage} from "@inertiajs/react";
import {useActiveMenu} from "@/Utils/Drawer/activeMenuUtils.jsx";
import {SnackbarProvider} from "@/Contexts/Alerts/SnackbarProvider.jsx";
import Body from "@/Layouts/UserLayout/Body/Body.jsx";
import Box from "@mui/material/Box";

const Layout = ({titlePage, menu, subMenu, backPage, children}) => {

    const alert = usePage().props.alert

    useActiveMenu(titlePage, menu, subMenu)

    return (
        <MenuProvider menu={menu} subMenu={subMenu}>
            <SnackbarProvider initialAlert={alert}>
                <Head title={titlePage ?? ''}/>
                <Navbar titlePage={titlePage ?? ''} backPage={backPage}/>
                <Box style={{display: 'flex', backgroundColor: '#f5f5f5'}}>
                    <SideMenu/>
                    <Body content={children}/>
                </Box>
            </SnackbarProvider>
        </MenuProvider>
    );
};

export default Layout;
