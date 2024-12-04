import {useDroppable} from '@dnd-kit/core';
import KanbanCard from './KanbanCard';
import {Box,  Typography} from "@mui/material";

const styles = {
    kanbanColumn: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        padding: '10px',
        minWidth: 350,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    kanbanColumnTitle: {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        padding: '10px',
        borderStartEndRadius: '8px',
        borderStartStartRadius: '8px',
        fontSize: '18px',
        marginBottom: '10px',
        width: '100%',
    }
};


const KanbanColumn = ({column, tasks}) => {
    const {setNodeRef} = useDroppable({
        id: column.status,
    });

    return (
        <Box ref={setNodeRef} style={styles.kanbanColumn}>
            <Box sx={{...styles.kanbanColumnTitle, backgroundColor: column.cor, color: column.corTexto}}>
                <Typography variant="h5" sx={{textAlign: 'center'}}>{column.nome}</Typography>
                <Typography variant="body1" sx={{textAlign: 'end'}}>Qtd. {tasks.length}</Typography>
            </Box>
            {tasks.map((task) => (
                    <KanbanCard key={task.id} task={task}/>
            ))}
        </Box>
    );
};

export default KanbanColumn;
