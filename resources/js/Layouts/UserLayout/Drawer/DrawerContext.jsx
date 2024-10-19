import React, {createContext, useContext, useEffect, useState} from 'react';
import {useMenuDrawer} from "@/Contexts/Drawer/DrawerContext.jsx";

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({children, menu, subMenu}) => {

    const {activeMenu, activeSubMenu} = useMenuDrawer()
    const [openedMenu, setOpenedMenu] = useState(menu);
    const [openedSubMenu, setOpenedSubMenu] = useState(subMenu);

    useEffect(() => {
        setOpenedMenu(activeMenu);
        setOpenedSubMenu(activeSubMenu)
    }, [activeSubMenu]);

    const toggleMenu = (index) => {
        setOpenedMenu((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <MenuContext.Provider value={{openedMenu, openedSubMenu, toggleMenu, activeMenu}}>
            {children}
        </MenuContext.Provider>
    );
};
