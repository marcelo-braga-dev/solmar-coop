import React, {useState} from 'react';
import KanbanCardContent from "@/Pages/Auth/Produtor/Kanban/KanbanCardContent.jsx";
import {Box} from "@mui/material";

const styles = {
    kanbanCard: {
        backgroundColor: '#fff',
        border: '1px solid #d1d1d1',
        borderRadius: 2,
        padding: 2,
        marginBottom: 3,
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        width: '100%',
        transition: 'box-shadow 0.3s ease',
    },
    kanbanCardHover: {
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    },
};

const KanbanCard = ({task}) => {

    const [hover, setHover] = useState(false);

    const style = {
        ...styles.kanbanCard,
        ...(hover ? styles.kanbanCardHover : {}),
    };

    const handleEnter = () => {
        setHover(true)
    }

    const handleLeave = () => {
        setHover(false)
    }

    return (
        <Box
            sx={style}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <KanbanCardContent card={task}/>
        </Box>
    );
};

export default KanbanCard;
