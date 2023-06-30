import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from "../pages/cardapio";
import CardapioAdd from "../pages/cardapio-add";
const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Cardapio />} />
                <Route path="/addItem" element={<CardapioAdd />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;