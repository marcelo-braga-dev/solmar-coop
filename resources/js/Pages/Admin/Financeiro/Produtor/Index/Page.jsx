import Layout from "@/Layouts/UserLayout/Layout.jsx";
import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import {IconGraph} from "@tabler/icons-react";

const Page = () => {
    return (
        <Layout titlePage="Fluxo de Caixa - Financeiro" menu="financeiro" subMenu="financeiro-produtor">
            <Card>
                <CardHeader title="Fluxo de Caixa" avatar={<IconGraph/>} disableTypography/>
                <CardContent>
                    <Typography>Não há registros.</Typography>
                </CardContent>
            </Card>
        </Layout>
    )
}
export default Page
