import Layout from "@/Layouts/UserLayout/Layout.jsx";
import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import {IconHeadset} from "@tabler/icons-react";

const Page = () => {
    return (
        <Layout titlePage="Suporte - Produtores" menu="suporte" subMenu="suporte-produtores">
            <Card>
                <CardHeader title="Suporte Geral" avatar={<IconHeadset/>}/>
                <CardContent>
                    <Typography>Não há registros de suporte.</Typography>
                </CardContent>
            </Card>
        </Layout>
    )
}
export default Page
