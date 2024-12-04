import {Card, CardContent, CardHeader} from "@mui/material";
import {IconClipboardText} from "@tabler/icons-react";
import Grid from "@mui/material/Grid2";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";

const DadoPessoaisData = ({user}) => {
    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Dados do Produtor" avatar={<IconClipboardText/>} disableTypography/>
            <CardContent>
                {/*PJ*/}
                {user?.data_user?.tipo_pessoa === 'pj' && (
                    <Grid container>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Razão Social" text={user?.data_user?.razao_social}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Nome Fantasia" text={user?.data_user?.nome_fantasia}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="CNPJ" text={user?.data_user?.cnpj}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Tipo de Empresa" text={user?.data_user?.tipo_empresa}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Ramo de Atividade" text={user?.data_user?.ramo_atividade}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Inscrição Estadual" text={user?.data_user?.ie}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Inscrição Municipal" text={user?.data_user?.im}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Data Fundação" text={user?.data_user?.data_fundacao}/>
                        </Grid>
                    </Grid>
                )}

                {/*PF*/}
                {user?.data_user?.tipo_pessoa === 'pf' && <Grid container spacing={3}>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Nome" text={user?.data_user?.nome}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="CPF" text={user?.data_user?.cpf}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="RG" text={user?.data_user?.rg}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Data de Nascimento" text={user?.data_user?.data_nascimento}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Gênero" text={user?.data_user?.genero}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Estado Civil" text={user?.data_user?.estado_civil}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Ocupação Profissional" text={user?.data_user?.profissao}/>
                    </Grid>
                </Grid>}
            </CardContent>
        </Card>
    )
}
export default DadoPessoaisData
