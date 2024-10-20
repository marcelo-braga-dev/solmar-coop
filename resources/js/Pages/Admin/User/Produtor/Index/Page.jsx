import {Link} from "@inertiajs/react";
import {Button, Card, CardContent, LinearProgress, Pagination, Stack, Typography} from "@mui/material";
import Layout from "@/Layouts/UserLayout/Layout.jsx";
import Grid from "@mui/material/Grid2";
import {IconEye, IconFileText, IconPlus, IconUserSearch} from "@tabler/icons-react";
import React, {useEffect, useState} from "react";

const Page = () => {
    const [produtores, setProdutores] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        const fetchProdutores = async () => {
            const response = await axios.get(route('admin.produtor.api.cadastrados')).finally(() => setCarregando(false))
            setProdutores(response.data)
        }

        fetchProdutores()
    }, []);

    return (
        <Layout titlePage="Produtores Solar" menu="produtores-solar" subMenu="produtores-solar-cadastrados">
            <Grid container marginBottom={4} justifyContent="space-between">
                <Grid size={3}>
                    <Link href={route('admin.produtor.create')}>
                        <Button startIcon={<IconPlus/>} color="success">Cadastrar Produtor</Button>
                    </Link>
                </Grid>
                <Grid size="auto">
                    <Pagination count={1}/>
                </Grid>
            </Grid>

            {carregando && <LinearProgress color="inherit"/>}

            {produtores.length === 0 && !carregando && <Typography>Nenhum Produtor Cadastrado.</Typography>}

            {produtores.map(item => (
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
                        <Grid container justifyContent="space-between">
                            <Grid marginTop={2}>
                                {item.status === 'novo' && (
                                    <Link href={route('admin.produtor.status.analizar-documentos.show', item.id)}>
                                        <Button color="warning" startIcon={<IconUserSearch/>}>Analizar Documentos</Button>
                                    </Link>
                                )}
                                {item.status === 'documentacao-aprovada' && (
                                    <Link href={route('auth.contratos.usina.index', {produtor: item.id})}>
                                        <Button color="info" startIcon={<IconFileText/>}>Gerar Contrato</Button>
                                    </Link>
                                )}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            ))}
        </Layout>
    )
}
export default Page
