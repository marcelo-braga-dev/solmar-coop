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
                {user?.user_data?.tipo_pessoa === 'pj' && (
                    <Grid container>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Razão Social" text={user?.user_data?.razao_social}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Nome Fantasia" text={user?.user_data?.nome_fantasia}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="CNPJ" text={user?.user_data?.cnpj}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Tipo de Empresa" text={user?.user_data?.tipo_empresa}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Ramo de Atividade" text={user?.user_data?.ramo_atividade}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Inscrição Estadual" text={user?.user_data?.ie}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Inscrição Municipal" text={user?.user_data?.im}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Data Fundação" text={user?.user_data?.data_fundacao}/>
                        </Grid>
                    </Grid>
                )}

                {/*PF*/}
                {user?.user_data?.tipo_pessoa === 'pf' && <Grid container spacing={3}>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Nome" text={user?.user_data?.nome}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="CPF" text={user?.user_data?.cpf}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="RG" text={user?.user_data?.rg}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Data de Nascimento" text={user?.user_data?.data_nascimento}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Gênero" text={user?.user_data?.genero}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Estado Civil" text={user?.user_data?.estado_civil}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Ocupação Profissional" text={user?.user_data?.profissao}/>
                    </Grid>
                </Grid>}
            </CardContent>
        </Card>
    )
}
export default DadoPessoaisData
