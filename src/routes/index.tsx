import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from "../pages/cardapio";
import CardapioAdd from "../pages/cardapio-add";
import CardapioEdit from "../pages/cardapio-edit";
const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Cardapio />} />
                <Route path="/addItem" element={<CardapioAdd />} />
                <Route path="/editItem" element={<CardapioEdit />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;