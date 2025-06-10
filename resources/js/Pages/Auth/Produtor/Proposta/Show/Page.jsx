import Layout from "@/Layouts/UserLayout/Layout.jsx";
import PropostaProdutor from "./PropostaProdutor.jsx";

const Page = ({idProposta}) => {
    return (
        <Layout titlePage="Proposta Produtor Solar" menu="produtores-solar" subMenu="produtores-propostas" backPage>
            <PropostaProdutor idProposta={idProposta}/>
        </Layout>
    )
}
export default Page
