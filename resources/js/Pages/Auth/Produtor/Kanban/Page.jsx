import Layout from "@/Layouts/UserLayout/Layout.jsx";
import Grid from "@mui/material/Grid2";
import {KanbanProdutorProvider} from "@/Pages/Auth/Produtor/Kanban/ContextKanban.jsx";
import KanbanUsinas from "@/Pages/Auth/Produtor/Kanban/KanbanUsinas.jsx";

const Page = () => {

    return (
        <Layout titlePage="Quadro de Produtores" menu="usinas" subMenu="produtores-kanban">
            <KanbanProdutorProvider>
                <Grid sx={{height: 'calc(100vh - 10rem)'}}>
                    <KanbanUsinas/>
                </Grid>
            </KanbanProdutorProvider>
        </Layout>
    );
};
export default Page;
