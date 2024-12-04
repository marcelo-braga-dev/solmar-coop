import React, {useState} from 'react';
import {useDraggable} from '@dnd-kit/core';
import KanbanCardContent from "@/Pages/Auth/Produtor/Kanban/KanbanCardContent.jsx";

const styles = {
    kanbanCard: {
        backgroundColor: '#fff',
        border: '1px solid #d1d1d1',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
        cursor: 'grab',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        width: '100%',
        transition: 'box-shadow 0.3s ease',
    },
    kanbanCardHover: {
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    },
};

const KanbanCard = ({task}) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useDraggable({
        id: task.id,
    });

    const [hover, setHover] = useState(false);

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        transition,
        ...styles.kanbanCard,
        ...(hover ? styles.kanbanCardHover : {}),
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <KanbanCardContent card={task}/>
        </div>
    );
};

export default KanbanCard;
