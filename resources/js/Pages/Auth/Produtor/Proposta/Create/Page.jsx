import Layout from "@/Layouts/UserLayout/Layout.jsx";
import Grid from "@mui/material/Grid2";
import {Button, Card, CardContent, CardHeader, MenuItem, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import Endereco from "@/Components/UserData/Endereco.jsx";
import ConsumoDados from "./ConsumoDados.jsx";
import {Link, router, useForm} from "@inertiajs/react";
import ConcessionariaSelect from "@/Pages/Auth/Cliente/Proposta/Create/Concessionaria.jsx";

const Page = () => {
    const [produtor, setProdutor] = useState([])
    const [endereco, setEndereco] = useState({})

    const {data, setData} = useForm()

    useEffect(() => {
        getProdutores()
    }, []);

    const getProdutores = async () => {
        const response = await axios.get(route('auth.produtor.api.get-all'))
        setProdutor(response.data)
    }

    const submit = (e) => {
        e.preventDefault()
        router.post(route('auth.produtor.proposta.store'), {...data, endereco})
    }

    return (
        <Layout titlePage="Gerar Proposta de Investimento- Produtor Solar" menu="produtores-solar" subMenu="produtores-propostas" backPage>
            <form onSubmit={submit}>
                <Card sx={{marginBlockEnd: 4}}>
                    <CardHeader title="Informações do Produtor Solar"/>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid size={{xs: 12, md: 4}}>
                                <TextField
                                    label="Produtor Solar"
                                    select
                                    required
                                    onChange={e => setData('produtor_id', e.target.value)}
                                    fullWidth
                                >
                                    {produtor.map(item => {
                                        return <MenuItem value={item.id} key={item.id}>#{item.id} {item.nome}</MenuItem>
                                    })}
                                </TextField>
                            </Grid>
                            <Grid size={{xs: 12, md: 4}}>
                                <Link href={route('auth.produtor.create')}>
                                    <Typography>
                                        Cadastrar Novo Produtor Solar
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

                <ConsumoDados data={data} setData={setData}/>

                <ConcessionariaSelect data={data} setData={setData}/>

                <Endereco title="Endereço do Local da Usina" endereco={endereco} setEndereco={setEndereco} required/>

                <Button type="submit" color="success">Cadastrar Proposta</Button>
            </form>
        </Layout>
    )
}
export default Page
