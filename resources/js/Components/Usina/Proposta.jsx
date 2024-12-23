import {Card, CardContent, CardHeader} from "@mui/material";
import {IconFileCheck} from "@tabler/icons-react";
import Grid from "@mui/material/Grid2";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";

const Proposta = ({proposta}) => {

    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Proposta" avatar={<IconFileCheck/>} disableTypography/>
            <CardContent>

                <TextInfo title="Consultor(a)" text={proposta?.consultor.nome}/>

                <Grid container>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Concessionária de Energia" text={`${proposta?.concessionaria.nome}/${proposta?.concessionaria.estado}`}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Unidade Consumidora" text={proposta?.uc}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Potência da Usina" text={`${proposta?.potencia_usina} kWp`}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Prazo Locacão" text={`${proposta?.prazo_locacao} meses`}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Média Geracão" text={`${proposta?.media_geracao} kWh/mês`}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Inversores" text={proposta?.inversores}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Módulos" text={proposta?.modulos}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default Proposta
