import Layout from "@/Layouts/UserLayout/Layout.jsx";
import ContratoUsina from "@/Pages/Auth/Contratos/Usinas/Contrato/ContratoUsina.jsx";
import {Paper} from "@mui/material";

const Page = ({contratoId}) => {

    return (
        <Layout titlePage="Contrato da Usina" menu="produtores-solar" subMenu="produtores-solar-cadastrados" backPage>
            <Paper variant="outlined" sx={{padding: 2, marginBottom: 4}}>
                <ContratoUsina contratoId={contratoId}/>
            </Paper>
        </Layout>
    )
}
export default Page
