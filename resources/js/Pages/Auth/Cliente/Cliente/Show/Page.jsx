import {useState} from "react";
import Layout from "@/Layouts/UserLayout/Layout.jsx";

import {Box, Button, Card, CardContent, Tab} from "@mui/material";
import {TabPanel, TabList, TabContext} from '@mui/lab';

import {IconFileLike, IconFileTypePdf, IconHistory, IconKey, IconUserBolt} from "@tabler/icons-react";

import InfoUsuario from "./InfoUsuario.jsx";
import Contratos from "./Contratos.jsx";
import Financeiro from "./Financeiro.jsx";
import Historico from "./Historico.jsx";
import InfoDadosAcesso from "@/Pages/Admin/User/Produtor/Show/InfoDadosAcesso.jsx";
import {Link} from "@inertiajs/react";

const Page = ({usuario, tab}) => {

    const [tabSelected, setTabSelected] = useState( tab ?? 'info')

    const handleChangeTab = (event, newValue) => {
        setTabSelected(newValue);
    };

    return (
        <Layout titlePage="Informações do Cliente Consumidor" menu="clientes" subMenu="clientes-cadastrados" backPage>
            <Card sx={{marginBottom: 3}}>
                <CardContent>
                    <TabContext value={tabSelected}>
                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <TabList onChange={handleChangeTab}
                                     variant="scrollable"
                                     scrollButtons
                                     allowScrollButtonsMobile
                                     textColor="primary"
                                     indicatorColor="primary"
                            >
                                <Tab label="Informações do Cliente" value="info" icon={<IconUserBolt size={20}/>} iconPosition="start"/>
                                <Tab label="Propostas Comerciais" value="propostas" icon={<IconFileLike size={20}/>} iconPosition="start"/>
                                <Tab label="Contratos" value="contratos" icon={<IconFileTypePdf size={20}/>} iconPosition="start"/>
                                <Tab label="Financeiro" value="financeiro" icon={<IconFileTypePdf size={20}/>} iconPosition="start"/>
                                <Tab label="Histórico" value="historico" icon={<IconHistory size={20}/>} iconPosition="start"/>
                                <Tab label="Dadosd de Acesso" value="acesso" icon={<IconKey size={20}/>} iconPosition="start"/>
                            </TabList>
                        </Box>
                        <TabPanel value="info">
                            <InfoUsuario status={usuario.status_nome} usuario={usuario.user_data} contatos={usuario.contatos}/>
                        </TabPanel>
                        <TabPanel value="propostas">
                            <Link href={route('auth.cliente.proposta.create')}>
                                <Button>Gerar Proposta</Button>
                            </Link>
                            {/*<Propostas propostas={usuario.propostas} cliente={usuario.user_data} endereco={usuario.endereco}/>*/}
                        </TabPanel>
                        <TabPanel value="contratos">
                            <Contratos contratos={usuario.contratos} contratado={usuario.user_data}/>
                        </TabPanel>
                        <TabPanel value="financeiro">
                            <Financeiro financeiro={usuario.financeiro}/>
                        </TabPanel>
                        <TabPanel value="historico">
                            <Historico historico={usuario.historico}/>
                        </TabPanel>
                        <TabPanel value="acesso">
                            <InfoDadosAcesso dados={usuario.dados_acesso}/>
                        </TabPanel>
                    </TabContext>
                </CardContent>
            </Card>
        </Layout>
    )
}
export default Page
