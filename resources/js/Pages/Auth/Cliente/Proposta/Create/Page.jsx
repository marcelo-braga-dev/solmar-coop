import Layout from "@/Layouts/UserLayout/Layout.jsx";
import {useState} from "react";
import Endereco from "@/Components/UserData/Endereco.jsx";
import ConsumoDados from "./ConsumoDados.jsx";
import {router, useForm} from "@inertiajs/react";
import PropostaCard from "@/Pages/Auth/Cliente/Proposta/Create/PropostaCard.jsx";
import DadosPessoais from "@/Components/UserData/DadosPessoais.jsx";
import Contato from "@/Components/UserData/Contato.jsx";

const Page = () => {
    const [endereco, setEndereco] = useState({})

    const {data, setData} = useForm({
        tipo_pessoa: 'pj'
    })

    const submit = (e) => {
        e.preventDefault()
        router.post(route('auth.cliente.proposta.store'), {...data, endereco})
    }

    return (
        <Layout titlePage="Gerar Proposta - Cliente Consumidor" menu="clientes" subMenu="clientes-propostas" backPage>
            <form onSubmit={submit}>

                <DadosPessoais data={data} setData={setData} title="Dados do Cliente"/>

                <Contato data={data} setData={setData}/>

                <ConsumoDados data={data} setData={setData}/>

                <PropostaCard  data={data} setData={setData}/>

                <Endereco title="Endereço da Unidade Consumidora" endereco={endereco} setEndereco={setEndereco} required/>

                <Button type="submit" color="success">Cadastrar Proposta</Button>
            </form>
        </Layout>
    )
}
export default Page
