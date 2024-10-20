import {IconButton, Paper} from "@mui/material";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";
import Grid from "@mui/material/Grid2";
import {IconDownload, IconFileTypePdf} from "@tabler/icons-react";

const Propostas = ({propostas}) => {
    return (
        <Paper sx={{padding: 2}} variant="outlined">
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid size="auto" paddingInlineEnd={2}>
                    <IconFileTypePdf color="red" size={30}/>
                </Grid>
                <Grid size={10} container justifyContent="space-between" gap={2}>
                    <Grid size="auto">
                        {propostas?.media_geracao && <TextInfo title="Média Geração" text={`${propostas.media_geracao} kWh`}/>}
                    </Grid>
                    <Grid size="auto">
                        {propostas?.prazo_locacao && <TextInfo title="Prazo Locação" text={`${propostas.prazo_locacao} dias`}/>}
                    </Grid>
                    <Grid size="auto">
                        {propostas?.concessionaria_id && <TextInfo title="Concessionária" text={`${propostas.concessionaria.nome}/${propostas.concessionaria.estado}`}/>}
                    </Grid>
                </Grid>
                <Grid size={1} paddingInlineStart={5} justifyItems={'center'}>
                    <IconButton>
                        <IconDownload/>
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default Propostas
