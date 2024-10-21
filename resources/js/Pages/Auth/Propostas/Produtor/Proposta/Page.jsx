import InfoUsuario from "@/Pages/Admin/User/Produtor/Show/InfoUsuario.jsx";
import {Button, Paper, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";

const Page = ({usuario, proposta}) => {

    return (
        <div style={{fontFamily: 'Arial, sans-serif', lineHeight: 1.6, color: '#333'}}>
            <Typography variant="h4" align="center" marginBottom={4}>Proposta Comercial</Typography>
            <InfoUsuario usuario={usuario}/>
            <Paper variant="outlined" sx={{padding: 2, marginBottom: 4, marginTop: 4}}>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid size={11} container justifyContent="space-between" gap={2}>
                        <Grid size="auto">
                            {proposta?.media_geracao && <TextInfo title="Média Geração" text={`${proposta.media_geracao} kWh`}/>}
                        </Grid>
                        <Grid size="auto">
                            {proposta?.prazo_locacao && <TextInfo title="Prazo Locação" text={`${proposta.prazo_locacao} dias`}/>}
                        </Grid>
                        <Grid size="auto">
                            {proposta?.concessionaria_id &&
                                <TextInfo title="Concessionária" text={`${proposta.concessionaria.nome}/${proposta.concessionaria.estado}`}/>}
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Page
