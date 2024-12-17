import {Box, Chip, Paper} from "@mui/material";
import Grid from "@mui/material/Grid2";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";
import * as React from "react";

const FinanceiroUsina = () => {
    return (
        <Box>
            <Paper variant="outlined">
                <Grid container>
                    <Grid size={{xs: 6, md: 3}}>
                        <TextInfo title="Período" text={'Março/2024'}/>
                    </Grid>
                    <Grid size={{xs: 6, md: 3}}>
                        <TextInfo title="Valor" text={`R$ 1.900,00`}/>
                    </Grid>
                    <Grid size={{xs: 6, md: 3}}>
                        <TextInfo title="Vencimento" text={`05/10/2024`}/>
                    </Grid>
                    <Grid size={{xs: 6, md: 3}} alignItems="center">
                        <Chip label="Em Aberto" color="info" sx={{marginBlockStart: 2}}/>
                    </Grid>
                </Grid>
            </Paper>
            <Paper variant="outlined">
                <Grid container>
                    <Grid size={{xs: 6, md: 3}}>
                        <TextInfo title="Período" text={'Fevereiro/2024'}/>
                    </Grid>
                    <Grid size={{xs: 6, md: 3}}>
                        <TextInfo title="Valor" text={`R$ 3.100,00`}/>
                    </Grid>
                    <Grid size={{xs: 6, md: 3}}>
                        <TextInfo title="Vencimento" text={`05/10/2024`}/>
                    </Grid>
                    <Grid size={{xs: 6, md: 3}} alignItems="center">
                        <Chip label="Pago" color="success" sx={{marginBlockStart: 2}}/>
                    </Grid>
                </Grid>
            </Paper>
            <Paper variant="outlined">
                <Grid container>
                    <Grid size={{xs: 6, md: 3}}>
                        <TextInfo title="Período" text={'Janeiro/2024'}/>
                    </Grid>
                    <Grid size={{xs: 6, md: 3}}>
                        <TextInfo title="Valor" text={`R$ 1.500,00`}/>
                    </Grid>
                    <Grid size={{xs: 6, md: 3}}>
                        <TextInfo title="Vencimento" text={`05/10/2024`}/>
                    </Grid>
                    <Grid size={{xs: 6, md: 3}}>
                        <Chip label="Em Atraso" color="error" sx={{marginBlockStart: 2}}/>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}
export default FinanceiroUsina
