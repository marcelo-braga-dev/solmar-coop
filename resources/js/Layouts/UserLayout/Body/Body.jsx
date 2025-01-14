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
            paddingInlineStart: matchDownMD ? 20 : 40,
            paddingInlineEnd: matchDownMD ? 20 : 50,
            overflow: 'hidden',
        }}>
            <Container maxWidth="lg" style={{
                overflowY: 'auto',
                padding: 0,
                minHeight: 'calc(100vh - 90px)'
            }}>
                <Box style={{
                    marginBottom: 50,
                    overflowX: 'auto',
                }}>
                    {!matchDownMD ? content : (!openMenuDrawer && content)}
                </Box>
            </Container>
        </Box>
    )
}
export default Body
