import React from 'react';
import {useDroppable} from '@dnd-kit/core';
import KanbanCard from './KanbanCard';

const styles = {
    kanbanColumn: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        padding: '10px',
        width: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    kanbanColumnTitle: {
        padding: '10px',
        borderRadius: '8px',
        textAlign: 'center',
        fontSize: '18px',
        marginBottom: '10px',
        width: '100%',
        color: 'white',
    },
    columnColors: {
        todo: {
            backgroundColor: '#007bff',
        },
        inProgress: {
            backgroundColor: '#28a745',
        },
        done: {
            backgroundColor: '#ffc107',
        },
    },
};

const KanbanColumn = ({column, tasks}) => {
    const {setNodeRef} = useDroppable({
        id: column.status,
    });

    return (
        <div ref={setNodeRef} style={styles.kanbanColumn}>
            <h3 style={{...styles.kanbanColumnTitle, backgroundColor: column.cor}}>{column.nome}</h3>
            {tasks.map((task) => (
                <KanbanCard key={task.id} task={task}/>
            ))}
        </div>
    );
};

export default KanbanColumn;
