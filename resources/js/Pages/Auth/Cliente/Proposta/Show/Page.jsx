import Layout from "@/Layouts/UserLayout/Layout.jsx";
// import PropostaCliente from "./PropostaCliente.jsx";
// import PropostaModelo from "@/Pages/Auth/Cliente/Proposta/Show/PropostaModelo.jsx";
import PropostaBaixar from "@/Pages/Auth/Cliente/Proposta/Show/Propostas.jsx";

const Page = ({idProposta}) => {
    return (
        <Layout titlePage="Proposta Cliente Consumidor" menu="clientes" subMenu="clientes-propostas">
            {/*<PropostaCliente idProposta={idProposta}/>*/}
            {/*<PropostaModelo/>*/}
            <PropostaBaixar/>
        </Layout>
    )
}
export default Page
