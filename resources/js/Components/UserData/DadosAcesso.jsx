import {Card, CardContent, CardHeader, FormGroup, Switch, TextField} from "@mui/material";
import {IconKey, IconPhoneCall} from "@tabler/icons-react";
import Grid from "@mui/material/Grid2";
import FormControlLabel from "@mui/material/FormControlLabel";
import {useState} from "react";

const DadosAcesso = ({data, setData}) => {
    const [senhaPorEmail, setSenhaPorEmail] = useState(true)

    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Dados de Acesso" avatar={<IconKey/>} disableTypography/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={{md: 6}}>
                        <TextField
                            label="Email:"
                            type="email"
                            onChange={e => setData('email', e.target.value)}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid size={6}>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch
                                    defaultChecked
                                    onChange={e => setSenhaPorEmail(e.target.checked)}
                                />}
                                label="Enviar senha de acesso por email?"/>
                        </FormGroup>
                    </Grid>
                    {!senhaPorEmail && <Grid size={6}>
                        <TextField
                            label="Senha:"
                            onChange={e => setData('senha', e.target.value)}
                            type="password"
                            required
                            fullWidth
                        />
                    </Grid>}
                </Grid>
            </CardContent>
        </Card>
    )
}
export default DadosAcesso
