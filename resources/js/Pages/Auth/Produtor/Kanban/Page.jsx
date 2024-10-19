import Layout from "@/Layouts/UserLayout/Layout.jsx";
import React, {useEffect, useState} from 'react';
import {DndContext, PointerSensor, useSensor, useSensors} from '@dnd-kit/core';
import KanbanColumn from './KanbanColumn';
import axios from 'axios';
import {LinearProgress} from "@mui/material";

const initialColumns = [
    {status: 'novo', nome: 'Analizar Documentos', cor: '#007bff'},
    {status: 'assinar_contrato', nome: 'Assinar Contrato', cor: '#ffc107'},
    {status: 'concluido', nome: 'Concluído', cor: '#28a745'},
];

const Page = () => {
    const [columns, setColumns] = useState(initialColumns);
    const [cards, setCards] = useState([]);

    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        const fetchProdutores = async () => {
            const response = await axios.get(route('admin.produtor.api.get-kanban')).finally(() => setCarregando(false))
            setCards(response.data)
        }

        fetchProdutores()
    }, []);

    // Função para mover os cards entre colunas
    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over) return; // Verificar se há uma coluna de destino

        const startStatus = findColumnContainingTask(active.id);
        const endStatus = over.id;

        // Verifica se os status são válidos e diferentes
        if (!startStatus || !endStatus || startStatus === endStatus) {
            return;
        }

        // Obter os cards da coluna de origem
        const startCards = cards[startStatus] ? Array.from(cards[startStatus]) : null;
        if (!startCards) return;

        const cardIndex = startCards.findIndex(card => card.id === parseInt(active.id));
        if (cardIndex === -1) return; // Verifica se o card foi encontrado

        const [movedCard] = startCards.splice(cardIndex, 1);
        movedCard.status = endStatus; // Atualiza o status do card

        // Obter os cards da coluna de destino
        const endCards = cards[endStatus] ? Array.from(cards[endStatus]) : [];
        endCards.push(movedCard);

        // Atualizar o estado com os novos cards
        setCards({
            ...cards,
            [startStatus]: startCards,
            [endStatus]: endCards,
        });

        // Disparar a requisição para atualizar o status no backend
        updateCardStatus(movedCard.id, endStatus);
    };

    const findColumnContainingTask = (taskId) => {
        return Object.keys(cards).find(status =>
            cards[status].some(card => card.id === parseInt(taskId))
        );
    };

    // Função para atualizar o status do card no backend
    const updateCardStatus = async (cardId, newStatus) => {
        try {
            const response = await axios.post(route('admin.produtor.api.update-status'), {
                id: cardId,
                status: newStatus
            });

            console.log(`Card ${cardId} atualizado para o status ${newStatus}`);
        } catch (error) {
            console.error('Erro ao atualizar o status do card:', error);
        }
    };

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 10,
            },
        })
    )

    return (
        <Layout titlePage="Quadro de Produtores" menu="produtores-solar" subMenu="produtores-kanban">
            {carregando && <LinearProgress color="inherit"/>}
            {!carregando && <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
                <div style={{display: 'flex', justifyContent: 'space-between', gap: '20px', padding: '20px'}}>
                    {columns.map(column => (
                        <KanbanColumn
                            key={column.status}
                            column={column}
                            tasks={cards[column.status] || []}
                            id={column.status}
                        />
                    ))}
                </div>
            </DndContext>}
        </Layout>
    );
};

export default Page;
