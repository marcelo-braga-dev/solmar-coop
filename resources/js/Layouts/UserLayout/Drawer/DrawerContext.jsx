import React, {createContext, useContext, useEffect, useState} from 'react';
import {useMenuDrawer} from "@/Contexts/Drawer/DrawerContext.jsx";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({children, menu, subMenu}) => {
    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

    const {activeMenu, activeSubMenu} = useMenuDrawer()
    const [openMenuDrawer, setOpenMenuDrawer] = useState(!matchDownMD);
    const [openedMenu, setOpenedMenu] = useState(menu);
    const [openedSubMenu, setOpenedSubMenu] = useState(subMenu);

    useEffect(() => {
        setOpenedMenu(activeMenu);
        setOpenedSubMenu(activeSubMenu)
    }, [activeSubMenu]);

    const toggleMenu = (index) => {
        setOpenedMenu((prevIndex) => (prevIndex === index ? null : index));
    };

    const toggleDrawerMenu = () => {
        setOpenMenuDrawer(e => !e)
    }

    return (
        <MenuContext.Provider value={{openedMenu, openedSubMenu, toggleMenu, activeMenu, openMenuDrawer, toggleDrawerMenu}}>
            {children}
        </MenuContext.Provider>
    );
};
