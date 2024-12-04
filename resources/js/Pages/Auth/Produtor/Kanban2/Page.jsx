import Layout from "@/Layouts/UserLayout/Layout.jsx";
import React, {useEffect, useState} from 'react';
import {DndContext, PointerSensor, useSensor, useSensors} from '@dnd-kit/core';
import KanbanColumn from './KanbanColumn';
import axios from 'axios';
import {LinearProgress} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {KanbanProdutorProvider} from "@/Pages/Auth/Produtor/Kanban/ContextKanban.jsx";

const initialColumns = [
    {status: 'novo', nome: 'Analizar Documentos', cor: '#007bff', corTexto: '#fff'},
    {status: 'assinar_contrato', nome: 'Assinar Pré-Contrato', cor: '#ddb02c', corTexto: '#fff'},
    {status: 'ficha_inscricao', nome: 'Preencher Ficha Inscrição', cor: '#28a745', corTexto: '#fff'},
    {status: 'contrato_adesao', nome: 'Assinar Contrato Adesão', cor: '#1128b8', corTexto: '#fff'},
    {status: 'contrato_aluguel', nome: 'Assinar Contrato Aluguel', cor: '#ea0b91', corTexto: '#fff'},
    {status: 'troca_titularidade', nome: 'Troca de Titularidade', cor: '#0ecf3b', corTexto: '#fff'},
    {status: 'concluido', nome: 'Concluído', cor: '#28a745', corTexto: '#fff'},
];

const Page = () => {
    // const [columns, setColumns] = useState(initialColumns);
    const columns = initialColumns;
    const [cards, setCards] = useState([]);

    const [carregando, setCarregando] = useState(true)

    const fetchProdutores = async () => {
        const response = await axios.get(route('admin.produtor.api.get-kanban')).finally(() => setCarregando(false))
        setCards(response.data)
    }

    useEffect(() => {
        fetchProdutores()
    }, []);

    // Função para mover os cards entre colunas
    const handleDragEnd = (event) => {
        const {active, over} = event;

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
            await axios.post(route('admin.produtor.api.update-status'), {
                id: cardId,
                status: newStatus
            });
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
            <KanbanProdutorProvider>
                <Grid sx={{height: 'calc(100vh - 10rem)'}}>
                    {!carregando && <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
                        <Grid sx={{display: 'flex', justifyContent: 'space-between', gap: '35px'}}>
                            {columns.map(column => (
                                <KanbanColumn
                                    key={column.status}
                                    column={column}
                                    tasks={cards[column.status] || []}
                                    id={column.status}
                                />
                            ))}
                        </Grid>
                    </DndContext>}
                </Grid>
            </KanbanProdutorProvider>
        </Layout>
    );
};

export default Page;
