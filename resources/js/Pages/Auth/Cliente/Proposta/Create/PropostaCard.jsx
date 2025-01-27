import {Card, CardContent, CardHeader, InputAdornment, TextField} from "@mui/material";
import {IconFileInvoice} from "@tabler/icons-react";
import Grid from "@mui/material/Grid2";

const PropostaCard = ({data, setData}) => {

    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Proposta" avatar={<IconFileInvoice/>} disableTypography/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={{xs: 12, md: 3}}>
                        <TextField
                            label="Taxa Redução da Conta"
                            type="number"
                            value={data?.usina?.concessionaria_id}
                            onChange={e => setData('taxa_reducao', e.target.value)}
                            slotProps={{
                                input: {
                                    endAdornment: <InputAdornment position="center">%</InputAdornment>,
                                },
                                htmlInput: {
                                    step: 0.01,
                                    min: 0
                                }
                            }}
                            fullWidth
                            required
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default PropostaCard
