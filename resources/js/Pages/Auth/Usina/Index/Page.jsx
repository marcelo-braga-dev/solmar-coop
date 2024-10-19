import Layout from "@/Layouts/UserLayout/Layout.jsx";
import {useEffect, useState} from "react";

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import {Card, CardContent, Divider, ListItemButton, Stack, Typography} from "@mui/material";
import {IconSolarPanel2} from "@tabler/icons-react";
import Grid from "@mui/material/Grid2";
import {Link} from "@inertiajs/react";

const Page = () => {
    const [concessionarias, setConcessionarias] = useState([])

    useEffect(() => {
        const fetchGet = async () => {
            const {data} = await axios.get(route('auth.concessionarias.get-all'))
            setConcessionarias(data)
        }
        fetchGet()
    }, []);

    return (
        <Layout titlePage="Usinas Solares" menu="usinas" subMenu="usinas-cadastradas">
            <Card>
                <CardContent>
                    <List>
                        {concessionarias.map(concessionaria => (<>
                            <ListItem key={concessionaria.id}>
                                <Link href={route('auth.concessionaria.usinas', concessionaria.id)}>
                                    <ListItemButton>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <IconSolarPanel2/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <Grid container>
                                            <Grid size={12} marginBottom={1}>
                                                <Typography fontWeight="bold" variant="h5">Concessionária: {concessionaria.nome} / {concessionaria.estado}</Typography>
                                            </Grid>
                                            <Grid size={12}>
                                                <Typography variant="body1">Potência Total de Usinas nesta Concessionária: 800 kWp</Typography>
                                            </Grid>
                                            <Grid size={3}>
                                                <Typography variant="body1">Qtd Usinas: 10</Typography>
                                            </Grid>
                                            <Grid size={3}>
                                                <Typography variant="body1">Potência em uso: 5000 kWp</Typography>
                                            </Grid>
                                            <Grid size={3}>
                                                <Typography variant="body1">Potência disponível: 3000 kWp</Typography>
                                            </Grid>
                                        </Grid>
                                    </ListItemButton>
                                </Link>

                            </ListItem>
                            <Divider/>
                        </>))}
                    </List>
                </CardContent>
            </Card>
        </Layout>
    )
}
export default Page
