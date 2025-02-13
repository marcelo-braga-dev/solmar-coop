import {Link} from "@inertiajs/react";
import {Button, Card, CardContent, LinearProgress, Pagination, Stack, Typography} from "@mui/material";
import Layout from "@/Layouts/UserLayout/Layout.jsx";
import Grid from "@mui/material/Grid2";
import {IconEye, IconFileText, IconPlus, IconUserSearch} from "@tabler/icons-react";
import React, {useEffect, useState} from "react";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";

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
            <Grid container marginBottom={3} justifyContent="space-between">
                <Grid size={12}>
                    <Link href={route('admin.produtor.create')}>
                        <Button startIcon={<IconPlus/>} color="success">Cadastrar Produtor</Button>
                    </Link>
                </Grid>
            </Grid>

            {carregando && <LinearProgress color="inherit"/>}

            {produtores.length === 0 && !carregando && <Typography>Nenhum Produtor Cadastrado.</Typography>}

            {produtores.map(item => (
                <Card key={item.id} sx={{marginBottom: 3}}>
                    <CardContent>
                        <Link href={route('admin.produtor.show', item.id)}>
                            <Grid container justifyContent="space-between">
                                <Grid size={{xs: 10, md: 11}}>
                                    <Stack spacing={2}>
                                        <Grid container>
                                            <Grid size={{xs: 12, md: 6}}>
                                                <Stack spacing={2}>
                                                    {item?.user_data?.nome && <TextInfo title="Nome" text={item.user_data.nome}/>}
                                                    {item?.user_data?.razao_social && <TextInfo title="Razão Social" text={item.user_data.razao_social}/>}
                                                    {item?.user_data?.nome_fantasia && <TextInfo title="Nome Fantasia" text={item?.user_data?.nome_fantasia}/>}
                                                    {item?.user_data?.cnpj && <TextInfo title="CNPJ" text={item?.user_data?.cnpj}/>}
                                                    {item?.endereco?.cidade_estado && <TextInfo title="Localização" text={item?.endereco?.cidade_estado}/>}
                                                </Stack>
                                            </Grid>
                                            <Grid size={{xs: 12, md: 6}}>
                                                <Stack spacing={2}>
                                                    {item.status_nome && <TextInfo title="Status" text={item.status_nome}/>}
                                                    {item.id && <TextInfo title="Matrícula" text={item.id}/>}
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Stack>
                                </Grid>
                                <Grid size={{xs: 2, md: 1}} justifyContent="end" display="flex">
                                    <IconEye/>
                                </Grid>
                            </Grid>
                        </Link>
                        <Grid container justifyContent="space-between">
                            <Grid>
                                {item.status === 'novo' && (
                                    <Link href={route('admin.produtor.status.analizar-documentos.show', item.id)}>
                                        <Button sx={{marginTop: 2}} color="warning" startIcon={<IconUserSearch size="20"/>} size="small">Analizar Documentos</Button>
                                    </Link>
                                )}
                                {item.status === 'documentacao-aprovada' && (
                                    <Link href={route('auth.contratos.usina.index', {produtor: item.id})}>
                                        <Button sx={{marginTop: 2}} color="info" startIcon={<IconFileText/>}>Gerar Contrato</Button>
                                    </Link>
                                )}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            ))}

            <Grid container marginBottom={2} justifyContent="center">
                <Grid size="auto">
                    <Pagination count={1}/>
                </Grid>
            </Grid>
        </Layout>
    )
}
export default Page
