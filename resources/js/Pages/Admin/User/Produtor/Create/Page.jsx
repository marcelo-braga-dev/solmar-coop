import Layout from "@/Layouts/UserLayout/Layout.jsx";
import {router, useForm} from "@inertiajs/react";

import {Button} from "@mui/material";
import {IconPlus} from "@tabler/icons-react";

import DadosPessoais from "@/Components/UserData/DadosPessoais.jsx";
import Endereco from "@/Components/UserData/Endereco.jsx";
import Contato from "@/Components/UserData/Contato.jsx";
import DadosAcesso from "@/Components/UserData/DadosAcesso.jsx";
import Usina from "@/Pages/Admin/User/Produtor/Create/Usina.jsx";

const Page = () => {

    const {data, setData} = useForm({
        tipo_pessoa: 'pj'
    })

    const submit = (e) => {
        e.preventDefault()
        router.post(route('admin.produtor.store'), {...data})
    }

    return (
        <Layout titlePage="Cadastro de Produtor" menu="produtores-solar" subMenu="produtores-solar-cadastrados-2" back>
            <form onSubmit={submit}>

                <DadosPessoais data={data} setData={setData}/>
                <Endereco data={data} setData={setData}/>
                <Contato data={data} setData={setData}/>
                <DadosAcesso data={data} setData={setData}/>
                <Usina data={data} setData={setData}/>

                <div className="text-center">
                    <Button type="submit" startIcon={<IconPlus/>} color="success">Cadastrar Produtor</Button>
                </div>
            </form>
        </Layout>
    )
}
export default Page
