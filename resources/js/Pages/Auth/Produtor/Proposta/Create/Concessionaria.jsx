import {Card, CardContent, CardHeader, MenuItem, TextField} from "@mui/material";
import {IconFileInvoice} from "@tabler/icons-react";
import Grid from "@mui/material/Grid2";
import {useEffect, useState} from "react";

const ConcessionariaSelect = ({data, setData}) => {
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
            <CardHeader title="Concessionária" avatar={<IconFileInvoice/>} disableTypography/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextField
                            label="Concessionária de Energia"
                            select
                            value={data?.usina?.concessionaria_id}
                            onChange={e => setData('concessionaria_id', e.target.value)}
                            fullWidth
                            required
                        >
                            {concessionarias.map(item => <MenuItem key={item.id} value={item.id}>{item.nome} / {item.estado}</MenuItem>)}
                        </TextField>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default ConcessionariaSelect
