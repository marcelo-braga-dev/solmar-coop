import {Box, Card, CardContent, CardHeader} from "@mui/material";
import {IconClipboardText} from "@tabler/icons-react";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";
import Grid from "@mui/material/Grid2";
import {convertData} from "@/Utils/Datas/convertData.js";

const Informacoes = ({data}) => {
    console.log(data)
    return (
        <Box>
            <Card sx={{marginBottom: 4}}>
                <CardHeader title="Dados Cadastrais" avatar={<IconClipboardText/>}/>
                <CardContent>
                    {data.tipo_pessoa === 'pj' && <Grid container>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="CNPJ" text={data.cnpj}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Razão Social" text={data.razao_social}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Nome Fantasia" text={data.nome_fantasia}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Tipo de Empresa" text={data.tipo_empresa}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Ramo Atividade" text={data.ramo_atividade}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Inscrição Estadual" text={data.ie}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Inscrição Municipal" text={data.im}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Data Fundação" text={data.data_fundacao}/>
                        </Grid>
                    </Grid>}

                    {data.tipo_pessoa === 'pf' && <Grid container>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Nome" text={data.nome}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="CPF" text={data.cpf}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="RG" text={data.rg}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Data de Nascimento" text={convertData(data.data_nascimento)}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Gênero" text={data.genero === 'm' ? 'Marculino' : 'Feminino'}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Estado Civil" text={data.estado_civil}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Ocupação Profissional" text={data.profissao}/>
                        </Grid>
                    </Grid>}
                </CardContent>
            </Card>
        </Box>
    )
}
export default Informacoes



