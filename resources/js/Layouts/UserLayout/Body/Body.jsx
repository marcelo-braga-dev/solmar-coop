import {Container, useMediaQuery} from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import {useMenu} from "@/Layouts/UserLayout/Drawer/DrawerContext.jsx";
import {useTheme} from "@mui/material/styles";

const Body = ({content}) => {
    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));

    const {openMenuDrawer} = useMenu()

    return (
        <Box style={{
            flexGrow: 1,
            marginTop: 90,
            paddingInlineStart: 40,
            paddingInlineEnd: 50,
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
                    {!matchDownMD ? content : (!openMenuDrawer && content)}
                </div>
            </Container>
        </Box>
    )
}
export default Body
