import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";
import Grid from "@mui/material/Grid2";

const InfoUsuario = ({dataUser}) => {
    return (
        <Grid container spacing={2}>
            <Grid size={{xs: 12, md: 6}}>
                {dataUser?.user_data?.nome && <TextInfo title="Nome" text={dataUser?.user_data?.nome}/>}
                {dataUser?.user_data?.razao_social && <TextInfo title="Razão Social" text={dataUser?.user_data?.razao_social}/>}
                {dataUser?.user_data?.nome_fantasia && <TextInfo title="Nome Fantasia" text={dataUser?.user_data?.nome_fantasia}/>}
                {dataUser?.user_data?.cnpj && <TextInfo title="CNPJ" text={dataUser?.user_data?.cnpj}/>}
                {dataUser?.user_data?.cpf && <TextInfo title="CPF" text={dataUser?.user_data?.cpf}/>}
                {dataUser?.user_data?.rg && <TextInfo title="RG" text={dataUser?.user_data?.rg}/>}
                {dataUser?.user_data?.ie && <TextInfo title="Inscrição Estadual" text={dataUser?.user_data?.ie}/>}
                {dataUser?.user_data?.im && <TextInfo title="Inscrição Municipal" text={dataUser?.user_data?.im}/>}
                {dataUser?.user_data?.data_nascimento && <TextInfo title="Data Nascimento" text={dataUser?.user_data?.data_nascimento}/>}
                {dataUser?.user_data?.data_fundacao && <TextInfo title="Data Fundação" text={dataUser?.user_data?.data_fundacao}/>}
                {dataUser?.user_data?.genero && <TextInfo title="Gênero" text={dataUser?.user_data?.genero}/>}
                {dataUser?.user_data?.estado_civil && <TextInfo title="Estado Civil" text={dataUser?.user_data?.estado_civil}/>}
                {dataUser?.user_data?.profissao && <TextInfo title="Profissão/Ocupação" text={dataUser?.user_data?.profissao}/>}
                {dataUser?.user_data?.tipo_empresa && <TextInfo title="Tipo de Empresa" text={dataUser?.user_data?.tipo_empresa}/>}
                {dataUser?.user_data?.ramo_atividade && <TextInfo title="Ramo de Atividade" text={dataUser?.user_data?.ramo_atividade}/>}
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
                {dataUser?.contatos?.celular && <TextInfo title="Celular" text={dataUser?.contatos.celular}/>}
                {dataUser?.contatos?.celular_2 && <TextInfo title="Celular 2" text={dataUser?.contatos.celular_2}/>}
                {dataUser?.contatos?.telefone && <TextInfo title="Telefone" text={dataUser?.contatos.telefone}/>}
                {dataUser?.contatos?.email && <TextInfo title="Email" text={dataUser?.contatos.email}/>}
                {dataUser?.cadastrado_em && <TextInfo title="Data Cadastro" text={dataUser.cadastrado_em}/>}
            </Grid>
            <Grid size={{xs: 12}}>
                {dataUser?.user_data?.endereco?.endereco_completo && <TextInfo title="Endereço" text={dataUser?.user_data?.endereco?.endereco_completo}/>}
                {dataUser?.status_nome && <TextInfo title="Status" text={dataUser?.status_nome}/>}
            </Grid>
        </Grid>

    )
}
export default InfoUsuario
