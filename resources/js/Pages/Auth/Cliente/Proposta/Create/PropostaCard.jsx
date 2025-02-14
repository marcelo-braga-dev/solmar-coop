import {Card, CardContent, CardHeader} from "@mui/material";
import {IconFileInvoice} from "@tabler/icons-react";
import Grid from "@mui/material/Grid2";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";

const PropostaCard = () => {

    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Proposta" avatar={<IconFileInvoice/>} disableTypography/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={{xs: 12, md: 3}}>
                        <TextInfo title="Taxa Redução da Conta de Energia" text="20%"/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default PropostaCard
