import Layout from "@/Layouts/UserLayout/Layout.jsx";
import PropostaCliente from "./PropostaCliente.jsx";

const Page = ({idProposta}) => {
    return (
        <Layout titlePage="Proposta Cliente Consumidor" menu="clientes" subMenu="clientes-propostas">
            <PropostaCliente idProposta={idProposta}/>
        </Layout>
    )
}
export default Page
