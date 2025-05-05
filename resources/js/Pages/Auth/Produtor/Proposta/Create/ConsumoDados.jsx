import Grid from "@mui/material/Grid2";
import {Card, CardContent, CardHeader, InputAdornment, TextField} from "@mui/material";
import {IconFileInvoice} from "@tabler/icons-react";
import {useEffect} from "react";
import useInputMask from "@/Utils/Masks/InputsMask.js";

const ConsumoDados = ({data, setData}) => {

    useEffect(() => {
        useInputMask()
    }, []);

    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Dados de Consumo" avatar={<IconFileInvoice/>} disableTypography/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={{xs: 12, md: 3}}>
                        <TextField
                            label="Potência da Usina"
                            value={data?.dados?.media_consumo}
                            onChange={e => setData({...data, potencia: e.target.value})}
                            type="number"
                            required
                            fullWidth
                            slotProps={{
                                input: {
                                    endAdornment: <InputAdornment position="start">kWp</InputAdornment>,
                                },
                            }}
                        />
                    </Grid>

                    <Grid size={{xs: 12, md: 3}}>
                        <TextField
                            label="Geração por Mês"
                            value={data?.dados?.media_consumo}
                            onChange={e => setData({...data, geracao: e.target.value})}
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
                            label="Valor do Investimento"
                            value={data?.dados?.valor}
                            onBlur={e => setData({...data, valor: e.target.value})}
                            className="money"
                            required
                            fullWidth
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                },
                            }}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default ConsumoDados
