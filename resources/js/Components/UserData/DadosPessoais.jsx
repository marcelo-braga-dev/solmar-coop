import {Button, Card, CardContent, CardHeader, MenuItem, TextField} from "@mui/material";
import Grid from "@mui/material/Grid2";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {IconClipboardText, IconSearch} from "@tabler/icons-react";
import {useEffect} from "react";
import useInputMask from "@/Utils/Masks/InputsMask.js";
import axios from 'axios';
import {useAlertMessage} from "@/Contexts/Alerts/SnackbarProvider.jsx";

const DadosPessoais = ({data, setData}) => {

    const {alertError} = useAlertMessage()

    useEffect(() => {
        useInputMask()
    }, []);

    const handleFetch = async () => {
        const cnpj = data?.cnpj?.replace(/\D/g, "")

        if (!cnpj || cnpj.length !== 14) {
            console.log('Por favor, insira um CNPJ válido (14 dígitos).')
            return;
        }

        try {
            // const response = await axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
            // const response = await axios.get(`https://open.cnpja.com/office/${cnpj}`);
            const response = await axios.get(`https://publica.cnpj.ws/cnpj/${cnpj}`);
            const empresa = response.data

            setData({
                ...data,
                razao_social: empresa?.razao_social,
                nome_fantasia: empresa?.estabelecimento?.nome_fantasia,
                tipo_empresa: empresa?.natureza_juridica?.descricao,
                ramo_atividade: empresa?.estabelecimento?.atividade_principal?.descricao,
                ie: empresa?.inscricoes_estaduais?.[0]?.inscricao_estadual,
                data_fundacao: empresa?.estabelecimento?.data_inicio_atividade,
            });
        } catch (err) {
            alertError(err?.response?.data?.detalhes)
            console.log('Erro ao buscar informações. Verifique o CNPJ ou tente novamente mais tarde.', err);
        } finally {

        }
    };

    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Dados Cadastrais" avatar={<IconClipboardText/>}/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={12}>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Tipo de Cadastro</FormLabel>
                            <RadioGroup
                                row
                                value={data.tipo_pessoa}
                                onChange={e => setData('tipo_pessoa', e.target.value)}
                            >
                                <FormControlLabel value="pj" control={<Radio/>} label="Pessoa Jurídica"/>
                                <FormControlLabel value="pf" control={<Radio/>} label="Pesso Física"/>
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    {data.tipo_pessoa === 'pj' && <>
                        <Grid size={{xs: 8, md: 4}}>
                            <TextField
                                label="CNPJ"
                                className="cnpj"
                                onChange={e => setData('cnpj', e.target.value)}
                                required
                                fullWidth/>
                        </Grid>
                        <Grid size={{xs: 4, md: 8}}>
                            <Button
                                startIcon={<IconSearch/>}
                                color="warning"
                                onClick={handleFetch}
                            >
                                Buscar Dados
                            </Button>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextField
                                label="Razão Social:"
                                value={data.razao_social}
                                onChange={e => setData('razao_social', e.target.value)}
                                required
                                slotProps={{inputLabel: {shrink: !!data.razao_social}}}
                                fullWidth/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextField
                                label="Nome Fantasia:"
                                value={data.nome_fantasia}
                                onChange={e => setData('nome_fantasia', e.target.value)}
                                slotProps={{inputLabel: {shrink: !!data.nome_fantasia}}}
                                fullWidth/>
                        </Grid>
                        <Grid size={{xs: 12, md: 4}}>
                            <TextField
                                label="Tipo de Empresa:"
                                onChange={e => setData('tipo_empresa', e.target.value)}
                                select
                                fullWidth>
                                <MenuItem value="Microempreendedor Individual (MEI)">Microempreendedor Individual (MEI)</MenuItem>
                                <MenuItem value="Sociedade Limitada (LTDA)">Sociedade Limitada (LTDA)</MenuItem>
                                <MenuItem value="Empresa Individual (EI)">Empresa Individual (EI)</MenuItem>
                                <MenuItem value="Associação">Associação</MenuItem>
                                <MenuItem value="Sociedade Simples (SS)">Sociedade Simples (SS)</MenuItem>
                                <MenuItem value="Sociedade Anônima (SA)">Sociedade Anônima (SA)</MenuItem>
                                <MenuItem value="Sociedade Limitada Unipessoal (SLU)">Sociedade Limitada Unipessoal (SLU)</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid size={{xs: 12, md: 4}}>
                            <TextField
                                label="Ramo Atividade:"
                                value={data.ramo_atividade}
                                onChange={e => setData('ramo_atividade', e.target.value)}
                                slotProps={{inputLabel: {shrink: !!data.ramo_atividade}}}
                                fullWidth/>
                        </Grid>
                        <Grid size={{xs: 12, md: 4}}>
                            <TextField
                                label="Inscrição Estadual:"
                                value={data.ie}
                                onChange={e => setData('ie', e.target.value)}
                                fullWidth/>
                        </Grid>
                        <Grid size={{xs: 12, md: 4}}>
                            <TextField
                                label="Inscrição Municipal:"
                                onChange={e => setData('im', e.target.value)}
                                fullWidth/>
                        </Grid>
                        <Grid size={{xs: 12, md: 4}}>
                            <TextField
                                label="Data Fundação:"
                                value={data.data_fundacao}
                                onChange={e => setData('data_fundacao', e.target.value)}
                                type="date"
                                slotProps={{inputLabel: {shrink: true}}}
                                fullWidth/>
                        </Grid>
                    </>}

                    {data.tipo_pessoa === 'pf' && <>
                        <Grid size={{xs: 12, md: 8}}>
                            <TextField
                                label="Nome Completo:"
                                onChange={e => setData('nome', e.target.value)}
                                required
                                fullWidth/>
                        </Grid>
                        <Grid size={{xs: 12, md: 4}}>
                            <TextField
                                label="CPF:"
                                onChange={e => setData('cpf', e.target.value)}
                                required
                                fullWidth/>
                        </Grid>
                        <Grid size={{xs: 12, md: 4}}>
                            <TextField
                                label="RG:"
                                fullWidth/>
                        </Grid>
                        <Grid size={{xs: 12, md: 4}}>
                            <TextField
                                label="Data Nascimento:"
                                onChange={e => setData('data_nascimento', e.target.value)}
                                type="date"
                                required
                                slotProps={{inputLabel: {shrink: true}}}
                                fullWidth/>
                        </Grid>
                        <Grid size={{xs: 12, md: 4}}>
                            <TextField
                                label="Gênero:"
                                onChange={e => setData('genero', e.target.value)}
                                select
                                fullWidth>
                                <MenuItem value="m">Masculino</MenuItem>
                                <MenuItem value="f">Feminino</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid size={{xs: 12, md: 4}}>
                            <TextField
                                label="Estado Civil:"
                                onChange={e => setData('estado_civil', e.target.value)}
                                select
                                fullWidth>
                                <MenuItem value="Solteiro(a)">Solteiro(a)</MenuItem>
                                <MenuItem value="Casado(a)">Casado(a)</MenuItem>
                                <MenuItem value="Divorciado(a)">Divorciado(a)</MenuItem>
                                <MenuItem value="Viuvo(a)">Viuvo(a)</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid size={{xs: 12, md: 8}}>
                            <TextField
                                label="Ocupação Profissional:"
                                onChange={e => setData('profissao', e.target.value)}
                                fullWidth/>
                        </Grid>
                    </>}
                </Grid>
            </CardContent>
        </Card>
    )
}
export default DadosPessoais
