import {Drawer, List, ListItem, Collapse, Typography, Stack} from '@mui/material';
import {useMenu} from './DrawerContext.jsx';
import {adminMenu} from "../Drawer/MenuItens/Admin";
import {IconChevronDown, IconChevronUp, IconPoint, IconPointFilled} from "@tabler/icons-react";
import {Link} from "@inertiajs/react";
import {useMemo, useState} from "react";

const styleDrawer = {
    width: 280,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: 270,
        boxSizing: 'border-box',
        marginTop: 0
    },
};

const styleDrawerItem = {pl: 4, borderBottom: 'none'};

export default function SideMenu() {

    const {openedMenu, openedSubMenu, toggleMenu, openMenuDrawer} = useMenu();

    const menuItems = adminMenu;

    const menuPrimary = useMemo(() => {
        return menuItems.map((item) => (
            <div key={item.id}>
                <ListItem
                    onClick={() => toggleMenu(item.id)}
                    sx={{cursor: 'pointer', borderBottom: 'none', justifyContent: 'space-between'}}
                >
                    <Stack direction="row" spacing={2} alignItems="center">
                        {item.icon}
                        <Typography variant="body1">{item.title}</Typography>
                    </Stack>
                    {openedMenu === item.id ? <IconChevronUp size={15}/> : <IconChevronDown size={15}/>}
                </ListItem>
                <Collapse in={openedMenu === item.id} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {item.subItems.map((subItem, subIndex) => (
                            <Link key={subIndex} href={subItem.link}>
                                <ListItem sx={styleDrawerItem}>
                                    {subItem.id === openedSubMenu ? <IconPointFilled size={17}/> : <IconPoint size={17}/>}
                                    <Typography marginLeft={1} variant="body1">{subItem.title}</Typography>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Collapse>
            </div>
        ))
    }, [toggleMenu]);

    return (
        openMenuDrawer && <Drawer
            variant="permanent"
            anchor="left"
            sx={styleDrawer}
        >
            <List sx={{marginTop: 9}}>
                {menuPrimary}
            </List>
        </Drawer>
    );
}
