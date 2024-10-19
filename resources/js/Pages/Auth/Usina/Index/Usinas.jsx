import Layout from "@/Layouts/UserLayout/Layout.jsx";
import {Box, Button, Card, CardContent, Divider, ListItemButton, Stack, Typography} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {Link} from "@inertiajs/react";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import {IconFileTypePdf, IconUserBolt} from "@tabler/icons-react";
import Grid from "@mui/material/Grid2";
import * as React from "react";

const Usinas = ({usinas}) => {
    return (
        <Layout titlePage="Usinas na Concessionária" menu="usinas" subMenu="usinas-cadas" back>

            <Grid container>
                <Grid size={4}>
                    <Card sx={{marginBottom: 2}}>
                        <CardContent>
                            <Typography>Média de Geração de Todas Usinas: 24000 kWh</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Card sx={{marginBottom: 2}}>
                <CardContent>
                    <List>
                        {usinas.map(usina => (
                            <>
                                <ListItem key={usina.id}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <IconUserBolt/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <Grid container spacing={1} padding={1}>
                                        <Grid item size={12}>
                                            <Typography fontWeight="bold" variant="h5">
                                                Proprietário: {usina.proprietario.name}
                                            </Typography>
                                        </Grid>
                                        <Stack direction="row" spacing={10} justifyContent="space-between" display="flex">
                                            <Typography variant="body1">Média Geração: 800 kWh</Typography>
                                            <Typography variant="body1">Prazo Locação: 120 meses</Typography>
                                            <Typography variant="body1">Unidade Consumidora: 5654654</Typography>
                                        </Stack>

                                        <Grid container size={12} spacing={2}>
                                            <Grid item xs={4}>
                                                <Button color="error" size="small" fullWidth startIcon={<IconFileTypePdf/>}>
                                                    Contrato
                                                </Button>
                                            </Grid>
                                            <Grid item xs={4}>
                                                {/* Outro conteúdo, se necessário */}
                                            </Grid>
                                            <Grid item xs={4}>
                                                {/* Outro conteúdo, se necessário */}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <Divider/>
                            </>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Layout>
    )
}
export default Usinas;
