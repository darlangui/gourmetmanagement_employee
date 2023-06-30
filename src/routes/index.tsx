import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from "../pages/cardapio";
const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Cardapio />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;