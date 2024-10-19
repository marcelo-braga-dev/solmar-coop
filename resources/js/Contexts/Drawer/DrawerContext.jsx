import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const useMenuDrawer = () => useContext(MenuContext);

export const DrawerProvider = ({ children }) => {
    const [titlePage, setTitlePage] = useState(null);
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const setMenuDrawer = (titlePage, menu, subMenu) => {
        setTitlePage(titlePage);
        setActiveMenu(menu);
        setActiveSubMenu(subMenu);
    };

    return (
        <MenuContext.Provider value={{ titlePage, activeMenu, activeSubMenu, setMenuDrawer }}>
            {children}
        </MenuContext.Provider>
    );
};
