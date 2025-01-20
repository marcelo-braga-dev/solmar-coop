import Layout from "@/Layouts/UserLayout/Layout.jsx";
import Propostas from "@/Pages/Admin/User/Produtor/Show/Propostas.jsx";

const Page = () => {
    return (
        <Layout titlePage="Proposta Cliente Consumidor" menu="clientes" subMenu="clientes-propostas">
            <Propostas/>
        </Layout>
    )
}
export default Page
