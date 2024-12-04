import React, {createContext, useContext} from 'react';

const KanbanProdutorContext = createContext();

export const useKanbanProdutor = () => useContext(KanbanProdutorContext);

export const KanbanProdutorProvider = ({children}) => {


    return (
        <KanbanProdutorContext.Provider value={{}}>
            {children}
        </KanbanProdutorContext.Provider>
    );
};
