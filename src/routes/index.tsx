import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Cardapio from "../pages/cardapio";
import CardapioAdd from "../pages/cardapio-add";
import CardapioEdit from "../pages/cardapio-edit";
import Login from "../pages/login/login";
import Pedido from "../pages/pedido";
import Mesas from '../pages/mesas';
import MesaView from '../pages/mesa-view';
import Comandas from '../pages/comandas';
import ComandaView from '../pages/comanda-view';
import PedidoView from "../pages/pedido-view";

interface ProtectedRouteProps {
    element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const token = window.localStorage.getItem('authToken');
    console.log(token)
    if (!token) {
        return <Navigate to="/" replace />;
    }

    return <>{element}</>;
};

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route
                    path="/cardapio"
                    element={
                        <ProtectedRoute
                            element={<Cardapio />}
                        />
                    }
                />
                <Route
                    path="/editItem"
                    element={
                        <ProtectedRoute
                            element={<CardapioEdit />}
                        />
                    }
                />
                <Route
                    path="/addItem"
                    element={
                        <ProtectedRoute
                            element={<CardapioAdd />}
                        />
                    }
                />
                <Route
                    path="/pedido"
                    element={
                        <ProtectedRoute
                            element={<Pedido />}
                        />
                    }
                />
               <Route
                    path="/mesas"
                    element={
                        <ProtectedRoute
                            element={<Mesas />}
                        />
                    }
                />
                <Route
                    path="/mesaView"
                    element={
                        <ProtectedRoute
                            element={<MesaView />}
                        />
                    }
                />
                <Route
                    path="/comandas"
                    element={
                        <ProtectedRoute
                            element={<Comandas />}
                        />
                    }
                />
                <Route
                    path="/comandaView"
                    element={
                        <ProtectedRoute
                            element={<ComandaView />}
                        />
                    }
                />
                <Route
                    path="/pedidoView"
                    element={
                        <ProtectedRoute
                            element={<PedidoView />}
                        />
                    }
                />
            </Routes>
        </Router>
    );
};

export default AppRouter;