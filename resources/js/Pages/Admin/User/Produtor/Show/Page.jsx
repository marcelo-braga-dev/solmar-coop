import Layout from "@/Layouts/UserLayout/Layout.jsx";
import {Card, CardContent, IconButton, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {IconEye} from "@tabler/icons-react";

const Page = () => {
    return (
        <Layout titlePage="Informações do Produtor" menu="produtores-solar" subMenu="produtores-solar-cadastrados" back>
            <Card sx={{marginBottom: 3}}>
                <CardContent>
                    <Grid container justifyContent="space-between">
                        <Grid size={12}>
                            <Stack spacing={2}>
                                <Stack direction="row" spacing={2}>
                                    <Typography fontWeight="bold">Nome/Razão Social:</Typography>
                                    <Typography>Nome do Produtor</Typography>
                                </Stack>
                                <Stack direction="row" spacing={2}>
                                    <Typography fontWeight="bold">Status:</Typography>
                                    <Typography>Aguardando Aprovação</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Layout>
    )
}
export default Page
