import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import * as style from './style';
import { api, setAuthHeader } from '../../services/api';

import user from '../../assets/elipse.png';
import row from '../../assets/row.png'
import file from '../../assets/file-text.png';
import order from '../../assets/order.png';
import input from '../../assets/input.png';
import search from '../../assets/search.png';
import rowBellow from '../../assets/rowBellow.png';


const Pedido: React.FC = () => {
    const navigate = useNavigate();
    const handlePedido = () => {
        navigate('/pedido');
    };

    const handleCardapio = () => {
        navigate('/cardapio');
    };

    return (
        <style.Container>
            <style.Header>
                <div className="user">
                    <img src={user} alt="Usuário" />
                    <div className="row">
                        <img src={row} alt="Flexa de Opções" />
                    </div>
                </div>
                <div className="file">
                    <img src={file} onClick={handleCardapio} alt="Cardapio"/>
                </div>
                <div className="order">
                    <img src={order} onClick={handlePedido} alt="Pedidos"/>
                </div>
            </style.Header>
            <style.Main>
                <div className="nav">
                    <h1>Pedidos <span>(Mesas)</span> </h1>
                    <div className="search">
                        <label htmlFor="search">
                            <div className="input">
                                <img src={search} alt={"Pesquisar"}/>
                                <input
                                    id="search"
                                    type="search"
                                    placeholder="Buscar ..."
                                />
                            </div>
                        </label>
                    </div>
                </div>
                <div className="content">
                    <div className="card-content">

                    </div>
                </div>
            </style.Main>
        </style.Container>
    );
};

export default Pedido;