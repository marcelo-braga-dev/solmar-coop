import Grid from "@mui/material/Grid2";
import {IconEye, IconHash, IconId, IconUser} from "@tabler/icons-react";
import {IconButton, Stack, Typography} from "@mui/material";
import React, {useMemo} from "react";
import {Link} from "@inertiajs/react";
import KanbanButton from "@/Pages/Auth/Produtor/Kanban/KanbanButton.jsx";

const KanbanCardContent = ({card}) => {

    return useMemo(() => {
        return (
            <Grid container>
                <Grid size={11}>
                    <Stack spacing={1}>
                        <Grid container gap={1}>
                            <Grid size={1}>
                                <IconUser/>
                            </Grid>
                            <Grid size={10}>
                                <Typography>{card.proprietario.user_data.nome ?? card.proprietario.user_data.razao_social}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container gap={1}>
                            <Grid size={1}>
                                <IconId/>
                            </Grid>
                            <Grid size={10}>
                                <Typography>{card.proprietario.user_data.cnpj}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container gap={1}>
                            <Grid size={1}>
                                <IconHash/>
                            </Grid>
                            <Grid size={10}>
                                <Typography>{card.id}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container gap={1} justifyContent="end">
                            <KanbanButton cardId={card.id} status={card.status}/>
                        </Grid>
                    </Stack>
                </Grid>
                <Grid size={1}>
                    <IconButton component={Link} href={route('admin.produtor.show', card.proprietario.id)}>
                        <IconEye/>
                    </IconButton>
                </Grid>
            </Grid>
        )
    }, [card.proprietario.user_data.nome, card.proprietario.user_data.razao_social, card.proprietario.user_data.cnpj, card.id, card.status, card.proprietario.id])
}
export default KanbanCardContent
