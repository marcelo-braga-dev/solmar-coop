import Layout from "@/Layouts/UserLayout/Layout.jsx";
import {Card, CardContent} from "@mui/material";
import * as React from "react";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import InformacoesUsina from "@/Pages/Auth/Usina/Show/InformacoesUsina.jsx";
import FinanceiroUsina from "@/Pages/Auth/Usina/Show/FinanceiroUsina.jsx";

const Page = ({id}) => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Layout titlePage="Informações da Usina" menu="usinas" subMenu="usinas-cadastrados">
            <Card>
                <CardContent>
                    <Box sx={{width: '100%', typography: 'body1'}}>
                        <TabContext value={value}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Informações da Usina" value="1"/>
                                    <Tab label="Financeiro" value="2"/>
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <InformacoesUsina id={id}/>
                            </TabPanel>
                            <TabPanel value="2">
                                <FinanceiroUsina id={id}/>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </CardContent>
            </Card>
        </Layout>
    )
}
export default Page
