import {Stack, Typography} from "@mui/material";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";

const Historico = ({historico}) => {
    return (
        <Stack spacing={2}>
            {!historico && <Typography>Não há registros de historico.</Typography>}
        </Stack>
    )
}
export default Historico
