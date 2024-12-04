import Grid from "@mui/material/Grid2";
import KanbanColumn from "@/Pages/Auth/Produtor/Kanban/KanbanColumn.jsx";

const KanbanColumns = ({columns, cards}) => {

    return (
        <Grid sx={{display: 'flex', justifyContent: 'space-between', gap: '35px'}}>
            {columns.map(column => (
                <KanbanColumn
                    key={column.status}
                    column={column}
                    tasks={cards[column.status] || []}
                />
            ))}
        </Grid>
    )
}
export default KanbanColumns
