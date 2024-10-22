import {useState} from "react";
import Layout from "@/Layouts/UserLayout/Layout.jsx";

import {Box, Card, CardContent, Tab} from "@mui/material";
import {TabPanel, TabList, TabContext} from '@mui/lab';

import {IconFileLike, IconFileTypePdf, IconHistory, IconSolarPanel, IconUserBolt} from "@tabler/icons-react";

import InfoUsuario from "./InfoUsuario.jsx";
import Usina from "./Usina.jsx";
import Contratos from "./Contratos.jsx";
import Financeiro from "./Financeiro.jsx";
import Propostas from "./Propostas.jsx";
import Historico from "./Historico.jsx";

const Page = ({usuario, tab}) => {

    const [tabSelected, setTabSelected] = useState( tab ?? 'info')

    const handleChangeTab = (event, newValue) => {
        setTabSelected(newValue);
    };

    return (
        <Layout titlePage="Informações do Produtor" menu="produtores-solar" subMenu="produtores-solar-cadastrados" backPage>
            <Card sx={{marginBottom: 3}}>
                <CardContent>
                    <TabContext value={tabSelected}>
                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <TabList onChange={handleChangeTab} variant="scrollable" scrollButtons="auto"
                                     textColor="primary"
                                     indicatorColor="primary">
                                <Tab label="Informações do Produtor" value="info" icon={<IconUserBolt size={20}/>} iconPosition="start"/>
                                <Tab label="Usinas Solar" value="usinas" icon={<IconSolarPanel size={20}/>} iconPosition="start"/>
                                <Tab label="Propostas Comerciais" value="propostas" icon={<IconFileLike size={20}/>} iconPosition="start"/>
                                <Tab label="Contratos" value="contratos" icon={<IconFileTypePdf size={20}/>} iconPosition="start"/>
                                <Tab label="Financeiro" value="financeiro" icon={<IconFileTypePdf size={20}/>} iconPosition="start"/>
                                <Tab label="historico" value="historico" icon={<IconHistory size={20}/>} iconPosition="start"/>
                            </TabList>
                        </Box>
                        <TabPanel value="info">
                            <InfoUsuario usuario={usuario.data_user} contatos={usuario.contatos}/>
                        </TabPanel>
                        <TabPanel value="usinas">
                            <Usina usina={usuario.propostas}/>
                        </TabPanel>
                        <TabPanel value="propostas">
                            <Propostas propostas={usuario.propostas} cliente={usuario.data_user} endereco={usuario.endereco}/>
                        </TabPanel>
                        <TabPanel value="contratos">
                            <Contratos contratos={usuario.contratos}/>
                        </TabPanel>
                        <TabPanel value="financeiro">
                            <Financeiro financeiro={usuario.financeiro}/>
                        </TabPanel>
                        <TabPanel value="historico">
                            <Historico historico={usuario.historico}/>
                        </TabPanel>
                    </TabContext>
                </CardContent>
            </Card>
        </Layout>
    )
}
export default Page
