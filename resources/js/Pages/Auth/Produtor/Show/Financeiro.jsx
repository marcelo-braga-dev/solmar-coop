import {Stack, Typography} from "@mui/material";

const Financeiro = ({financeiro}) => {
    return (
        <Stack spacing={2}>
            {!financeiro && <Typography>Não há registros financeiros.</Typography>}
        </Stack>
    )
}
export default Financeiro
