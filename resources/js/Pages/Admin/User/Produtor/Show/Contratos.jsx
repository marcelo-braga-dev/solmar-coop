import {Stack, Typography} from "@mui/material";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";

const Contratos = ({contratos}) => {
    return (
        <Stack spacing={2}>
            {!contratos && <Typography>Não há registros de contratos.</Typography>}
        </Stack>
    )
}
export default Contratos
