import {Stack, Typography} from "@mui/material";

const Historico = ({historico}) => {
    return (
        <Stack spacing={2}>
            {!historico && <Typography>Não há registros de historico.</Typography>}
        </Stack>
    )
}
export default Historico
