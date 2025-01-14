import {Card, CardContent, CardHeader, TextField} from "@mui/material";
import {IconPhoneCall} from "@tabler/icons-react";
import Grid from "@mui/material/Grid2";
import {useEffect} from "react";
import useInputMask from "@/Utils/Masks/InputsMask.js";

const Contato = ({data, setData}) => {
    useEffect(() => {
        useInputMask()
    }, []);

    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Contatos" avatar={<IconPhoneCall/>} disableTypography/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={{xs: 12, md: 3}}>
                        <TextField
                            label="Celular:"
                            required
                            className="mobile"
                            value={data?.contato?.celular}
                            onChange={e => setData({...data, contato: {...data.contato, celular: e.target.value}})}
                            slotProps={{inputLabel: {shrink: !!data?.contato?.celular}}}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{xs: 12, md: 3}}>
                        <TextField
                            label="Celular 2:"
                            className="mobile"
                            value={data?.contato?.celular_2}
                            onChange={e => setData({...data, contato: {...data.contato, celular_2: e.target.value}})}
                            slotProps={{inputLabel: {shrink: !!data?.contato?.celular_2}}}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{xs: 12, md: 3}}>
                        <TextField
                            label="Telefone:"
                            className="phone"
                            value={data?.contato?.telefone}
                            onChange={e => setData({...data, contato: {...data.contato, telefone: e.target.value}})}
                            slotProps={{inputLabel: {shrink: !!data?.contato?.telefone}}}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{xs: 12, md: 3}}>
                        <TextField
                            label="Email:"
                            type="email"
                            value={data?.contato?.email}
                            onChange={e => setData({...data, contato: {...data.contato, email: e.target.value}})}
                            slotProps={{inputLabel: {shrink: !!data?.contato?.email}}}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default Contato
