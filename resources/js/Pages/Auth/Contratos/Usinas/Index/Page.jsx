import Layout from "@/Layouts/UserLayout/Layout.jsx";
import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import {IconFileLike} from "@tabler/icons-react";

const Page = () => {
    return (
        <Layout titlePage="Contratos Gerados" menu="contratos" subMenu="contratos-usinas">
            <Card>
                <CardHeader
                    title="Contratos Gerados"
                    avatar={<IconFileLike/>}
                    disableTypography
                    // action={<Button component={Link} href={'/'} size="small" color="warning" startIcon={<IconEdit/>}>Editar Contrato Modelo</Button>}
                />
                <CardContent>
                    <Typography>Não há registros de contratos.</Typography>
                </CardContent>
            </Card>
        </Layout>
    )
}
export default Page
