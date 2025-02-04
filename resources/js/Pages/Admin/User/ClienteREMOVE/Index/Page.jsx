import Layout from "@/Layouts/UserLayout/Layout.jsx";
import Grid from "@mui/material/Grid2";
import {Link} from "@inertiajs/react";
import {Button, Card, CardContent, LinearProgress, Pagination, Stack, Typography} from "@mui/material";
import {IconEye, IconPlus} from "@tabler/icons-react";
import React, {useEffect, useState} from "react";

const Page = () => {
    const [carregando, setCarregando] = useState(true)
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        fetchVendedores()
    }, []);

    const fetchVendedores = async () => {
        try {
            const response = await axios.get(route('admin.user.cliente.api.get'))
            setUsuarios(response.data)
            console.log(response.data)
        } finally {
            setCarregando(false)
        }
    }

    return (
        <Layout titlePage="Cliente Consumidor Cadastrados" menu="clientes" subMenu="clientes-cadastrados">
            <Grid container marginBottom={1} justifyContent="space-between">
                <Grid>
                    <Link href={route('admin.user.cliente.create')}>
                        <Button startIcon={<IconPlus/>} color="success">Cadastrar Cliente Consumidor</Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid container marginBottom={4} justifyContent="end">
                <Grid size="auto">
                    <Pagination count={1}/>
                </Grid>
            </Grid>

            {carregando && <LinearProgress color="inherit"/>}

            {usuarios.length === 0 && !carregando && <Typography>Nenhum Produtor Cadastrado.</Typography>}

            {usuarios.map(item => (
                <Card key={item.id} sx={{marginBottom: 3}}>
                    <CardContent>
                        <Grid container justifyContent="space-between">
                            <Grid size={11}>
                                <Stack marginBottom={1}>
                                    {item.user_data.nome && <Stack direction="row" spacing={2}>
                                        <Typography fontWeight="bold">Nome:</Typography>
                                        <Typography>{item.user_data.nome}</Typography>
                                    </Stack>}
                                    {item.user_data.nome_fantasia && <Stack direction="row" spacing={2}>
                                        <Typography fontWeight="bold">Nome Fantasia:</Typography>
                                        <Typography>{item.user_data.nome_fantasia}</Typography>
                                    </Stack>}
                                    {item.user_data.razao_social && <Stack direction="row" spacing={2}>
                                        <Typography fontWeight="bold">Razão Social:</Typography>
                                        <Typography>{item.user_data.razao_social}</Typography>
                                    </Stack>}
                                </Stack>
                                <Grid container>
                                    <Grid size={{xs: 12, md: 6}}>
                                        {item.user_data.cnpj && <Stack direction="row" spacing={2}>
                                            <Typography fontWeight="bold">CNPJ:</Typography>
                                            <Typography>{item.user_data.cnpj}</Typography>
                                        </Stack>}
                                        {item.user_data.cpf && <Stack direction="row" spacing={2}>
                                            <Typography fontWeight="bold">CPF:</Typography>
                                            <Typography>{item.user_data.cpf}</Typography>
                                        </Stack>}
                                    </Grid>
                                    <Grid size={{xs: 12, md: 6}}>
                                        <Stack direction="row" spacing={2}>
                                            <Typography fontWeight="bold">Localização:</Typography>
                                            <Typography>{item.user_data.endereco.cidade_estado}</Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid size={{xs: 12, md: 6}}>
                                        <Stack direction="row" spacing={2}>
                                            <Typography fontWeight="bold">Status:</Typography>
                                            <Typography>{item.status_nome}</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid size={{xs: 12, md: 6}}>
                                        <Stack direction="row" spacing={2} justifyContent="space-between" display="flex">
                                            <Stack direction="row" spacing={2}>
                                                <Typography fontWeight="bold">Matrícula:</Typography>
                                                <Typography>{item.id}</Typography>
                                            </Stack>
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <Typography fontWeight="bold" variant="body1">Cadastrado em:</Typography>
                                                <Typography variant="body1">{item.cadastrado_em}</Typography>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size="auto">
                                <Link href={route('admin.user.cliente.show', item.id)}>
                                    <IconEye/>
                                </Link>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            ))}
        </Layout>
    )
}
export default Page
