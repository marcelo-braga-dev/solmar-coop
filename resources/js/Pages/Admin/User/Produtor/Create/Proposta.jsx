import {Card, CardContent, CardHeader, InputAdornment, MenuItem, TextField} from "@mui/material";
import {IconFileInvoice} from "@tabler/icons-react";
import Grid from "@mui/material/Grid2";
import {useEffect, useState} from "react";

const Proposta = ({data, setData}) => {
    const [concessionarias, setConcessionarias] = useState([])

    useEffect(() => {
        const fetchGet = async () => {
            const {data} = await axios.get(route('auth.concessionarias.get-all'))
            setConcessionarias(data)
        }
        fetchGet()
    }, []);

    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Usina Solar" avatar={<IconFileInvoice/>} disableTypography/>
            <CardContent>
                <Grid container spacing={3} marginBottom={4}>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextField
                            label="Concessionária de Energia"
                            select
                            onChange={e => setData({...data, usina: {...data.usina, concessionaria_id: e.target.value}})}
                            fullWidth
                            required
                        >
                            {concessionarias.map(item => <MenuItem key={item.id} value={item.id}>{item.nome} / {item.estado}</MenuItem>)}
                        </TextField>
                    </Grid>
                </Grid>
                <Grid container spacing={3} marginBottom={4}>
                    <Grid size={{xs: 12, md: 3}}>
                        <TextField
                            label="Unidade Consumidora"
                            type="number"
                            onChange={e => setData({...data, usina: {...data.usina, uc: e.target.value}})}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid size={{xs: 12, md: 3}}>
                        <TextField
                            label="Média Geração Mensal"
                            onChange={e => setData({...data, usina: {...data.usina, media_geracao: e.target.value}})}
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
                            label="Potência Total da Usina"
                            onChange={e => setData({...data, usina: {...data.usina, potencia_usina: e.target.value}})}
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
                            label="Prazo Locação"
                            onChange={e => setData({...data, usina: {...data.usina, prazo_locacao: e.target.value}})}
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
                <Grid container spacing={3} marginBottom={4}>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextField
                            label="Informações sobre Inversores"
                            onChange={e => setData({...data, usina: {...data.usina, inversores: e.target.value}})}
                            required
                            fullWidth
                            multiline
                            minRows={3}
                        />
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextField
                            label="Informações sobre Módulos"
                            onChange={e => setData({...data, usina: {...data.usina, modulos: e.target.value}})}
                            required
                            fullWidth
                            multiline
                            minRows={3}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default Proposta
