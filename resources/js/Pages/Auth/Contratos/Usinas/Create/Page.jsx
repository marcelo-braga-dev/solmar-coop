import Layout from "@/Layouts/UserLayout/Layout.jsx";
import {Button, Card, CardContent, TextField, Typography} from "@mui/material";
import {IconFileTypePdf} from "@tabler/icons-react";
import DadoPessoaisData from "@/Components/DataUser/DadoPessoaisData.jsx";
import Grid from "@mui/material/Grid2";

const Page = ({produtor}) => {
    return (
        <Layout titlePage="Gerar Contrato de Usina" menu="contratos" subMenu="contratos-produtores">
            <DadoPessoaisData user={produtor}/>
            <Card>
                <CardContent>
                    <Grid container spacing={4}>
                        <Grid>
                            <Card>
                                <CardContent>
                                    <Button color="error" startIcon={<IconFileTypePdf/>}>Gerar Contrato Para Produtor Assinar</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid>
                            <Card>
                                <CardContent>
                                    <Typography>Subir Contrato Assinado</Typography>
                                    <TextField type="file"/>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Layout>
    )
}
export default Page
