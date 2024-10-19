import {Card, CardContent, CardHeader} from "@mui/material";
import {IconPhoneCall} from "@tabler/icons-react";
import Grid from "@mui/material/Grid2";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";

const ContatoData = ({user}) => {
    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Contatos" avatar={<IconPhoneCall/>} disableTypography/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={6}>
                        <TextInfo title="Contato Telefone" text=""/>
                    </Grid>
                    <Grid size={6}>
                        <TextInfo title="Email Contato" text=""/>
                    </Grid>
                    <Grid size={6}>
                        <TextInfo title="Celular" text=""/>
                    </Grid>
                    <Grid size={6}>
                        <TextInfo title="Telefone" text=""/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default ContatoData
