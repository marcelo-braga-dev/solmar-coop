import Layout from "@/Layouts/UserLayout/Layout.jsx";
import Grid from "@mui/material/Grid2";
import {Button, Card, CardContent, Divider, Stack, Typography} from "@mui/material";
import {IconPlus} from "@tabler/icons-react";
import {Link} from "@inertiajs/react";
import React, {useEffect, useState} from "react";
import {convertMesesParaAnos} from "@/Utils/Datas/convertMesesParaAnos.js";

const Page = () => {
    const [registros, setRegistros] = useState([])

    useEffect(() => {
        getRegistros()
    }, []);

    const getRegistros = async () => {
        const response = await axios.get(route('auth.cliente.proposta.api.get'))
        setRegistros(response.data)
    }

    return (
        <Layout titlePage="Propostas - Cliente Consumidor" menu="clientes" subMenu="clientes-propostas">
            <Grid container sx={{marginBlockEnd: 4}}>
                <Link href={route('auth.cliente.proposta.create')}>
                    <Button color="success" startIcon={<IconPlus/>}>Gerar Proposta</Button>
                </Link>
            </Grid>

            {registros.map(item => (
                <Link key={item.id} href={route('auth.cliente.proposta.show', item.id)}>
                    <Card sx={{marginBottom: 3}}>
                        <CardContent>
                            <Grid container justifyContent="space-between">
                                <Grid size={12}>
                                    <Stack marginBottom={1}>
                                        {item.cliente.user_data.nome && <Stack direction="row" spacing={2}>
                                            <Typography fontWeight="bold">Nome:</Typography>
                                            <Typography>{item.cliente.user_data.nome}</Typography>
                                        </Stack>}
                                        {item.cliente.user_data.nome_fantasia && <Stack direction="row" spacing={2}>
                                            <Typography fontWeight="bold">Nome Fantasia:</Typography>
                                            <Typography>{item.cliente.user_data.nome_fantasia}</Typography>
                                        </Stack>}
                                        {item.cliente.user_data.razao_social && <Stack direction="row" spacing={2}>
                                            <Typography fontWeight="bold">Razão Social:</Typography>
                                            <Typography>{item.cliente.user_data.razao_social}</Typography>
                                        </Stack>}
                                    </Stack>
                                    <Grid container>
                                        <Grid size={{xs: 12, md: 6}}>
                                            {item.cliente.user_data.cnpj && <Stack direction="row" spacing={2}>
                                                <Typography fontWeight="bold">CNPJ:</Typography>
                                                <Typography>{item.cliente.user_data.cnpj}</Typography>
                                            </Stack>}
                                            {item.cliente.user_data.cpf && <Stack direction="row" spacing={2}>
                                                <Typography fontWeight="bold">CPF:</Typography>
                                                <Typography>{item.cliente.user_data.cpf}</Typography>
                                            </Stack>}
                                        </Grid>
                                        <Grid size={{xs: 12, md: 6}}>
                                            <Stack direction="row" spacing={2}>
                                                <Typography fontWeight="bold">Localização:</Typography>
                                                <Typography>{item?.endereco?.cidade_estado}</Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>

                                    <Divider sx={{marginBlock: 1}}/>

                                    <Grid container>
                                        <Grid size={{xs: 12, md: 6}}>
                                            <Stack direction="row" spacing={2}>
                                                <Typography fontWeight="bold">Média Consumo:</Typography>
                                                <Typography>{item.media_consumo} kWh/mês</Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid size={{xs: 12, md: 6}}>
                                            <Stack direction="row" spacing={2}>
                                                <Typography fontWeight="bold">Prazo Assinatura:</Typography>
                                                <Typography>{item.prazo_locacao} meses ({convertMesesParaAnos(item.prazo_locacao)} anos)</Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>

                                    <Divider sx={{marginBlock: 1}}/>

                                    <Grid container>
                                        <Grid size={{xs: 12, md: 6}}>
                                            <Stack direction="row" spacing={2}>
                                                <Typography fontWeight="bold">Taxa Redução da Conta:</Typography>
                                                <Typography>{item.taxa_reducao}%</Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid size={{xs: 12, md: 6}}>
                                            <Stack direction="row" spacing={2}>
                                                <Typography fontWeight="bold">Concessionária:</Typography>
                                                <Typography>{item.concessionaria.nome}</Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>

                                    <Divider sx={{marginBlock: 1}}/>

                                    <Grid container justifyContent="space-between">
                                        <Grid size={{xs: 12, md: 'auto'}}>
                                            <Stack direction="row" spacing={2}>
                                                <Typography fontWeight="bold" variant="body2">Id da proposta:</Typography>
                                                <Typography variant="body2">#{item.id}</Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid size={{xs: 12, md: 'auto'}}>
                                            <Stack direction="row" spacing={2}>
                                                <Typography fontWeight="bold" variant="body2">Criado em:</Typography>
                                                <Typography variant="body2">{item.criado_em}</Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </Layout>
    )
}
export default Page
