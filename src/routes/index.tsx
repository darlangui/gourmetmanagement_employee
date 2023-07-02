import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Cardapio from "../pages/cardapio";
import CardapioAdd from "../pages/cardapio-add";
import CardapioEdit from "../pages/cardapio-edit";
import Login from "../pages/login/login";
import Pedido from "../pages/pedido";


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
                    element={<Pedido />}
                />
            </Routes>
        </Router>
    );
};

export default AppRouter;
