import Grid from "@mui/material/Grid2";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";

const InfoDadosAcesso = ({dados}) => {

    return (
        <Grid container>
            <Grid>
                <TextInfo title="Email" text={dados.email}/>
                <TextInfo title="Status" text={dados.status_nome}/>
            </Grid>
        </Grid>
    )

}
export default InfoDadosAcesso
