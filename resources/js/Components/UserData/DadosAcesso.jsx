import {Card, CardContent, CardHeader, FormGroup, Switch, TextField} from "@mui/material";
import {IconKey} from "@tabler/icons-react";
import Grid from "@mui/material/Grid2";
import FormControlLabel from "@mui/material/FormControlLabel";
import {useState} from "react";

const DadosAcesso = ({data, setData}) => {
    const [senhaPorEmail, setSenhaPorEmail] = useState(!data.senha)
    console.log(data.senha)
    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Dados de Acesso" avatar={<IconKey/>} disableTypography/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextField
                            label="Email:"
                            type="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            slotProps={{inputLabel: {shrink: !!data?.contato?.telefone}}}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch
                                    defaultChecked={!data.senha}
                                    onChange={e => setSenhaPorEmail(e.target.checked)}
                                />}
                                label="Enviar senha de acesso por email?"/>
                        </FormGroup>
                    </Grid>
                    {!senhaPorEmail && <Grid size={{xs: 12, md: 6}}>
                        <TextField
                            label="Senha:"
                            value={data.senha}
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
