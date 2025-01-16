import Layout from "@/Layouts/UserLayout/Layout.jsx";
import Grid from "@mui/material/Grid2";
import {Link} from "@inertiajs/react";
import {Button, Card, CardContent, LinearProgress, Pagination, Stack, Typography} from "@mui/material";
import {IconEye, IconPlus} from "@tabler/icons-react";
import React, {useEffect, useState} from "react";

const Page = ({}) => {
    const [carregando, setCarregando] = useState(true)
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        const fetchVendedores = async () => {
            const response = await axios.get(route('admin.user.api.get')).finally(() => setCarregando(false))
            setUsuarios(response.data)
            console.log(response.data)
        }

        fetchVendedores()
    }, []);

    return (
        <Layout titlePage="Administradores Cadastrados" menu="admin" subMenu="admin-cadastrados">
            <Grid container marginBottom={4} justifyContent="space-between">
                <Grid size={3}>
                    <Link href={route('admin.user.admin.create')}>
                        <Button startIcon={<IconPlus/>} color="success">Cadastrar Administrador</Button>
                    </Link>
                </Grid>
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
                                    {item?.data_user?.nome && <Stack direction="row" spacing={2}>
                                        <Typography fontWeight="bold">Nome:</Typography>
                                        <Typography>{item?.data_user?.nome}</Typography>
                                    </Stack>}
                                    {item?.data_user?.nome_fantasia && <Stack direction="row" spacing={2}>
                                        <Typography fontWeight="bold">Nome Fantasia:</Typography>
                                        <Typography>{item?.data_user?.nome_fantasia}</Typography>
                                    </Stack>}
                                    {item?.data_user?.razao_social && <Stack direction="row" spacing={2}>
                                        <Typography fontWeight="bold">Razão Social:</Typography>
                                        <Typography>{item?.data_user?.razao_social}</Typography>
                                    </Stack>}
                                </Stack>
                                <Grid container>
                                    <Grid size={{xs: 12, md: 6}}>
                                        {item?.data_user?.cnpj && <Stack direction="row" spacing={2}>
                                            <Typography fontWeight="bold">CNPJ:</Typography>
                                            <Typography>{item?.data_user?.cnpj}</Typography>
                                        </Stack>}
                                        {item?.data_user?.cpf && <Stack direction="row" spacing={2}>
                                            <Typography fontWeight="bold">CPF:</Typography>
                                            <Typography>{item?.data_user?.cpf}</Typography>
                                        </Stack>}
                                    </Grid>
                                    <Grid size={{xs: 12, md: 6}}>
                                        <Stack direction="row" spacing={2}>
                                            <Typography fontWeight="bold">Localização:</Typography>
                                            <Typography>{item?.data_user?.endereco.cidade_estado}</Typography>
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
