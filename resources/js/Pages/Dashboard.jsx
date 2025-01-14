import Layout from "@/Layouts/UserLayout/Layout.jsx";
import {Card, CardContent, Typography} from "@mui/material";

const Page = () => {
    return (
        <Layout>
            <Card sx={{marginBlockEnd: 3}}>
                <CardContent>
                    <Typography>
                        Aplicativo para realizar o cadastro dos usuários do sistema, que são os produtores, clientes e consultores.
                    </Typography>
                    <Typography>
                        Informar quais são as concessionárias de energia elétrica, isso ajuda na organização das informações, assim como o histórico de atualziações.
                    </Typography>
                    <Typography>
                        E umas das principais vantagens é a faciidade em cadastrar as usinas de energia solar, para você não perder os dados e saber quando cada
                        informações é atualziada e também a qual proutor pertence.
                    </Typography>
                </CardContent>
            </Card>
        </Layout>
    )
}
export default Page
