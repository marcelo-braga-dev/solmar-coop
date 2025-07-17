import Layout from "@/Layouts/UserLayout/Layout.jsx";
import Grid from "@mui/material/Grid2";
import {Link} from "@inertiajs/react";
import {Card, CardContent, LinearProgress, Pagination, Stack, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";

const Page = () => {
    const [carregando, setCarregando] = useState(true)
    const [usuarios, setUsuarios] = useState([])
    const [lastPage, setLastPage] = useState()
    const [page, setPage] = React.useState();

    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        fetchRegistros()
    }, [page]);

    const fetchRegistros = async () => {
        try {
            const response = await axios.get(route('auth.cliente.api.get', {page}))
            setUsuarios(response.data.data)
            setLastPage(response.data.last_page)
        } finally {
            setCarregando(false)
        }
    }

    return (
        <Layout titlePage="Cliente Consumidor Cadastrados" menu="clientes" subMenu="clientes-cadastrados">

            {carregando && <LinearProgress color="inherit"/>}

            {usuarios.length === 0 && !carregando && <Typography>Nenhum Produtor Cadastrado.</Typography>}

            {usuarios.map(item => (
                <Link key={item.id} href={route('auth.cliente.show', item.id)}>
                    <Card sx={{marginBottom: 3}}>
                        <CardContent>
                            <Grid container justifyContent="space-between">
                                <Grid size={12}>
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
                                                <Typography>{item.user_data?.endereco?.cidade_estado}</Typography>
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
                                        <Grid size={{xs: 12, md: 3}}>
                                            <Stack direction="row" spacing={2}>
                                                <Typography fontWeight="bold">Matrícula:</Typography>
                                                <Typography>{item.id}</Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid size={{xs: 12, md: 3}}>
                                            <Stack direction="row" spacing={2}>
                                                <Typography fontWeight="bold" variant="body1">Cadastrado em:</Typography>
                                                <Typography variant="body1">{item.cadastrado_em}</Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Link>
            ))}

            <Grid container marginBottom={4} justifyContent="center">
                <Grid size="auto">
                    <Pagination count={lastPage} page={page} onChange={handleChange}/>
                </Grid>
            </Grid>
        </Layout>
    )
}
export default Page
