import Layout from "@/Layouts/UserLayout/Layout.jsx";
import {router, useForm} from "@inertiajs/react";

import {Button} from "@mui/material";
import {IconPlus} from "@tabler/icons-react";

import DadosPessoais from "@/Components/UserData/DadosPessoais.jsx";
import Endereco from "@/Components/UserData/Endereco.jsx";
import Contato from "@/Components/UserData/Contato.jsx";
import DadosAcesso from "@/Components/UserData/DadosAcesso.jsx";

const Page = () => {

    const {data, setData} = useForm({
        tipo_pessoa: 'pj'
    })

    const submit = (e) => {
        e.preventDefault()
        router.post(route('admin.user.cliente.store'), {...data})
    }

    return (
        <Layout titlePage="Cadastro de Cliente" menu="clientes" subMenu="clientes-cadastrar" back>
            <form onSubmit={submit}>

                <DadosPessoais data={data} setData={setData}/>
                <Endereco data={data} setData={setData}/>
                <Contato data={data} setData={setData}/>
                <DadosAcesso data={data} setData={setData}/>

                <div className="text-center">
                    <Button type="submit" startIcon={<IconPlus/>} color="success">Cadastrar Produtor</Button>
                </div>
            </form>
        </Layout>
    )
}
export default Page
