import Layout from "@/Layouts/UserLayout/Layout.jsx";
import Grid from "@mui/material/Grid2";
import {Button, Card, CardContent, CardHeader, MenuItem, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import Endereco from "@/Components/UserData/Endereco.jsx";
import ConsumoDados from "./ConsumoDados.jsx";
import {Link, router, useForm} from "@inertiajs/react";
import ConcessionariaSelect from "@/Pages/Auth/Cliente/Proposta/Create/Concessionaria.jsx";
import PropostaCard from "@/Pages/Auth/Cliente/Proposta/Create/PropostaCard.jsx";

const Page = () => {
    const [clientes, setClientes] = useState([])
    const [endereco, setEndereco] = useState({})

    const {data, setData} = useForm()

    useEffect(() => {
        getClientes()
    }, []);

    const getClientes = async () => {
        const response = await axios.get(route('auth.cliente.api.get'))
        setClientes(response.data.data)
    }

    const submit = (e) => {
        e.preventDefault()
        router.post(route('auth.cliente.proposta.store'), {...data, endereco})
    }

    return (
        <Layout titlePage="Gerar Proposta - Cliente Consumidor" menu="clientes" subMenu="clientes-propostas" backPage>
            <form onSubmit={submit}>
                <Card sx={{marginBlockEnd: 4}}>
                    <CardHeader title="Informações do Cliente Consumidor"/>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid size={{xs: 12, md: 4}}>
                                <TextField
                                    label="Cliente Consumidor"
                                    select
                                    required
                                    onChange={e => setData('cliente_id', e.target.value)}
                                    fullWidth
                                >
                                    {clientes.map(item => {
                                        return <MenuItem value={item.id} key={item.id}>#{item.id} {item.nome}</MenuItem>
                                    })}
                                </TextField>
                            </Grid>
                            <Grid size={{xs: 12, md: 4}}>
                                <Link href={route('auth.cliente.create')}>
                                    <Typography>
                                        Cadastrar Novo Cliente Consumidor
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

                <ConsumoDados data={data} setData={setData}/>

                <ConcessionariaSelect data={data} setData={setData}/>

                <PropostaCard  data={data} setData={setData}/>

                <Endereco title="Endereço da Unidade Consumidora" endereco={endereco} setEndereco={setEndereco} required/>

                <Button type="submit" color="success">Cadastrar Proposta</Button>
            </form>
        </Layout>
    )
}
export default Page
