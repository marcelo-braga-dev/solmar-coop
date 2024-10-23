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
            const response = await axios.get(route('admin.user.cliente.api.get')).finally(() => setCarregando(false))
            setUsuarios(response.data)
            console.log(response.data)
        }

        fetchVendedores()
    }, []);

    return (
        <Layout titlePage="Cliente Consumidor Cadastrados" menu="clientes" subMenu="clientes-cadastrados">
            <Grid container marginBottom={4} justifyContent="space-between">
                <Grid size={3}>
                    <Link href={route('admin.user.cliente.create')}>
                        <Button startIcon={<IconPlus/>} color="success">Cadastrar Cliente Consumidor</Button>
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
                                <Stack spacing={2}>
                                    <Stack direction="row" spacing={2}>
                                        <Typography fontWeight="bold">Nome/Razão Social:</Typography>
                                        <Typography>{item.name}</Typography>
                                    </Stack>
                                    <Grid container>
                                        <Grid size={6}>
                                            <Stack direction="row" spacing={2}>
                                                <Typography fontWeight="bold">Matrícula:</Typography>
                                                <Typography>{item.id}</Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid size={6}>
                                            <Stack direction="row" spacing={2}>
                                                <Typography fontWeight="bold">Status:</Typography>
                                                <Typography>{item.status_nome}</Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid size={6}>
                                            <Stack direction="row" spacing={2}>
                                                <Typography fontWeight="bold">CNPJ:</Typography>
                                                <Typography>15.564.264/0001-87</Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid size={6}>
                                            <Stack direction="row" spacing={2}>
                                                <Typography fontWeight="bold">Localização:</Typography>
                                                <Typography>Santos/SP</Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Stack>
                            </Grid>
                            <Grid size="auto">
                                <Link href={route('admin.produtor.show', 1)}>
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
