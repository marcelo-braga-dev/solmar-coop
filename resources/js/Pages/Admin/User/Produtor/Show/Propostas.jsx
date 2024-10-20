import {Stack, Typography} from "@mui/material";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";

const Propostas = ({propostas}) => {
    return (
        <Stack spacing={2}>
            {!propostas && <Typography>Não há registros de propostas comerciais.</Typography>}
        </Stack>
    )
}
export default Propostas
