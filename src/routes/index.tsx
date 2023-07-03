import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from "../pages/cardapio";
import CardapioAdd from "../pages/cardapio-add";
import CardapioEdit from "../pages/cardapio-edit";
import Login from "../pages/login/login";
import Mesas from "../pages/mesas"
import MesaView from '../pages/mesa-view';
import Comandas from '../pages/comandas';
import ComandaView from '../pages/comanda-view';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cardapio" element={<Cardapio />} />
                <Route path="/addItem" element={<CardapioAdd />} />
                <Route path="/editItem" element={<CardapioEdit />} />
                <Route path="/mesas" element={<Mesas />} />
                <Route path="/mesaView" element={<MesaView />} />
                <Route path="/comandas" element={<Comandas />} />
                <Route path="/comandaView" element={<ComandaView />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;