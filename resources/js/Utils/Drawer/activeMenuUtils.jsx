import { useEffect } from 'react';
import {useMenuDrawer} from "@/Contexts/Drawer/DrawerContext.jsx";

/**
 * @param {string} titlePage - Identificador do menu principal.
 * @param {string} menuId - Identificador do menu principal.
 * @param {string} subMenuId - Identificador do submenu (opcional).
 */
export function useActiveMenu(titlePage = null, menuId = null, subMenuId = null) {
    const { setMenuDrawer } = useMenuDrawer();

    useEffect(() => {
        setMenuDrawer(titlePage, menuId, subMenuId);
    }, [titlePage, menuId, subMenuId, setMenuDrawer]);
}
