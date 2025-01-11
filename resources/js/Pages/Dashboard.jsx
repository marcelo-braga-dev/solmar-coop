import Layout from "@/Layouts/UserLayout/Layout.jsx";
import {Button, Card, CardContent, Stack, Typography} from "@mui/material";

const Page = () => {
    return (
        <Layout>
            <Card sx={{marginBlockEnd: 3}}>
                <CardContent>
                    <Typography>
                        Ferramenta para Fazer a Gestão da Geração de Energia Solar
                    </Typography>
                    <Typography>
                        A geração de energia solar tem se tornado uma solução cada vez mais popular para empresas, indústrias e residências que buscam reduzir custos com
                        energia elétrica e adotar práticas mais sustentáveis. Contudo, para aproveitar ao máximo essa tecnologia, é essencial contar com uma ferramenta de
                        gestão eficiente que permita monitorar e controlar a geração e o consumo de energia de forma prática e integrada.
                    </Typography>
                    <Typography>
                        A adoção de uma ferramenta de gestão da geração de energia solar traz inúmeros benefícios. Para residências, ela ajuda a reduzir ainda mais os
                        custos com energia elétrica, permitindo uma maior autonomia. Para empresas e indústrias, é uma forma de maximizar a eficiência energética e
                        alcançar metas de sustentabilidade. Além disso, gestores têm acesso a dados detalhados que ajudam a planejar expansões ou atualizações no sistema.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{marginBlockEnd: 3}}>
                <CardContent>
                    <Stack spacing={3} direction="row">
                        <Button color="success" href={route('admin.produtor.index')}>Produtores</Button>
                        <Button color="success" href={route('admin.user.cliente.index')}>Consultores</Button>
                        <Button color="success" href={route('auth.usinas.index')}>Usinas</Button>
                        <Button color="success" href={route('admin.concessionaria.index')}>Concessionárias</Button>
                    </Stack>
                </CardContent>
            </Card>
        </Layout>
    )
}
export default Page
