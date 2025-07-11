import Grid from "@mui/material/Grid2";
import {Card, CardContent, CardHeader, InputAdornment, MenuItem, TextField} from "@mui/material";
import {IconFileInvoice} from "@tabler/icons-react";
import formatarMoneyReal from "@/Utils/Formatters/formatarMoney.js";

const ConsumoDados = ({data, setData}) => {
    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Dados de Consumo" avatar={<IconFileInvoice/>} disableTypography/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={{xs: 12, md: 3}}>
                        <TextField
                            label="Média Mensal da Conta de Energia"
                            value={data?.dados?.valor_medio}
                            onChange={e => setData({...data, dados: {...data.dados, valor_medio: formatarMoneyReal(e.target.value) }})}
                            required
                            fullWidth
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="center">R$</InputAdornment>,
                                }
                            }}
                        />

                    </Grid>
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
                            label="Prazo Contrato"
                            value={data?.dados?.prazo_locacao}
                            onChange={e => setData({...data, dados: {...data.dados, prazo_locacao: e.target.value}})}
                            select
                            required
                            fullWidth
                        >
                            <MenuItem value={12}>12 meses (1 ano)</MenuItem>
                            <MenuItem value={24}>24 meses (2 anos)</MenuItem>
                            <MenuItem value={36}>36 meses (3 anos)</MenuItem>
                            <MenuItem value={48}>48 meses (4 anos)</MenuItem>
                            <MenuItem value={60}>60 meses (5 anos)</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid size={{xs: 12, md: 3}}>
                        <TextField
                            label="Número da Unidade Consumidora"
                            value={data?.dados?.unidade_consumidora}
                            onChange={e => setData({...data, dados: {...data.dados, unidade_consumidora: e.target.value}})}
                            required
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default ConsumoDados
