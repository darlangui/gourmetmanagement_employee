import React, {useState, useEffect, useRef} from 'react';
import { api, setAuthHeader } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import * as style from './style';

import user from '../../assets/elipse.png';
import row from '../../assets/row.png'
import file from '../../assets/file-text-select.png';
import order from '../../assets/order-unselect.png';

const PedidoView: React.FC = () => {
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
                    <img src={file} alt="Cardapio"/>
                </div>
                <div className="order">
                    <img src={order} alt="Pedidos"/>
                </div>
            </style.Header>
            <style.Main>
                <div className="nav">
                    <h1>Visualizar pedido</h1>
                </div>
                <div className="content">

                </div>
            </style.Main>
        </style.Container>
    );
};

export default PedidoView;