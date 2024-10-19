import {Card, CardContent, CardHeader} from "@mui/material";
import {IconSolarPanel2} from "@tabler/icons-react";
import Grid from "@mui/material/Grid2";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";

const UsinaData = ({usina}) => {
    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Usina Solar" avatar={<IconSolarPanel2/>} disableTypography/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={6}>
                        <TextInfo title="Unidade Consumidora" text={usina.uc}/>
                    </Grid>
                    <Grid size={6}>
                        <TextInfo title="Média Geração Mensal" text={`${usina.media_geracao} kWh`}/>
                    </Grid>
                    <Grid size={6}>
                        <TextInfo title="Prazo de Locação" text={`${usina.prazo_locacao} dias`}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default UsinaData
