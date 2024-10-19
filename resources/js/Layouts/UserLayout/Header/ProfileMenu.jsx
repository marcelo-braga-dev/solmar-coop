import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Avatar, IconButton, Stack, Typography} from "@mui/material";
import {router} from "@inertiajs/react";
import {IconLogout} from "@tabler/icons-react";

export default function ProfileMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        router.post(route('logout'))
    }

    return (
        <div>
            <IconButton edge="end" color="inherit" onClick={handleClick}>
                <Avatar sx={{width: 30, height: 30}}/>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={logout}>
                    <Stack direction="row" spacing={1}>
                        <IconLogout/>
                        <Typography>Logout</Typography>
                    </Stack>

                </MenuItem>
            </Menu>
        </div>
    );
}
