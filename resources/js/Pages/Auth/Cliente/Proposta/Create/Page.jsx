import Layout from "@/Layouts/UserLayout/Layout.jsx";
import Grid from "@mui/material/Grid2";
import {Button, Card, CardContent, CardHeader, MenuItem, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import Endereco from "@/Components/UserData/Endereco.jsx";
import ConsumoDados from "@/Pages/Admin/User/Cliente/Create/ConsumoDados.jsx";
import {router, useForm} from "@inertiajs/react";

const Page = () => {
    const [clientes, setClientes] = useState([])
    const [endereco, setEndereco] = useState({})

    const {data, setData} = useForm()

    useEffect(() => {
        getClientes()
    }, []);

    const getClientes = async () => {
        const response = await axios.get(route('auth.cliente.api.get'))
        setClientes(response.data)
        console.log(response.data)
    }

    const submit = (e) => {
        e.preventDefault()
        router.post(route('auth.cliente.proposta.store'), {...data, endereco})
    }

    return (
        <Layout titlePage="Criar Proposta - Cliente Consumidor" menu="clientes" subMenu="clientes-propostas" backPage>
            <form onSubmit={submit}>
                <Card sx={{marginBlockEnd: 4}}>
                    <CardHeader title="Informações do Cliente Consumidor"/>
                    <CardContent>
                        <Grid container>
                            <Grid size={{xs: 12, md: 4}}>
                                <TextField
                                    label="Cliente Consumidor"
                                    select
                                    required
                                    onChange={e => setData('cliente_id', e.target.value)}
                                    fullWidth
                                >
                                    {clientes.map(item => {
                                        return <MenuItem value={item.id}>#{item.id} {item.nome}</MenuItem>
                                    })}
                                </TextField>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

                <ConsumoDados data={data} setData={setData}/>

                <Endereco title="Endereço da Unidade Consumidora" endereco={endereco} setEndereco={setEndereco} required/>

                <Button type="submit" color="success">Cadastrar Proposta</Button>
            </form>
        </Layout>
    )
}
export default Page
