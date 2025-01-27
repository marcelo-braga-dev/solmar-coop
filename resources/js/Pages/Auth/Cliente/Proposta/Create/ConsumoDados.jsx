import Grid from "@mui/material/Grid2";
import {Card, CardContent, CardHeader, InputAdornment, MenuItem, TextField} from "@mui/material";
import {IconFileInvoice} from "@tabler/icons-react";

const ConsumoDados = ({data, setData}) => {
    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Dados de Consumo" avatar={<IconFileInvoice/>} disableTypography/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={{xs: 12, md: 3}}>
                        <TextField
                            label="Média Consumo Mensal"
                            value={data?.dados?.media_consumo}
                            onChange={e => setData({...data, dados: {...data.dados, media_consumo: e.target.value}})}
                            type="number"
                            required
                            fullWidth
                            slotProps={{
                                input: {
                                    endAdornment: <InputAdornment position="start">kWh/mês</InputAdornment>,
                                },
                            }}
                        />
                    </Grid>
                    <Grid size={{xs: 12, md: 3}}>
                        <TextField
                            label="Prazo Locação"
                            value={data?.dados?.prazo_locacao}
                            onChange={e => setData({...data, dados: {...data.dados, prazo_locacao: e.target.value}})}
                            select
                            required
                            fullWidth
                        >
                            <MenuItem value={60}>60 meses</MenuItem>
                            <MenuItem value={120}>125 meses</MenuItem>
                            <MenuItem value={240}>240 meses</MenuItem>
                        </TextField>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default ConsumoDados
