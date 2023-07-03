import React, {useState, useEffect, useRef} from 'react';
import { api, setAuthHeader } from '../../services/api';
import { useLocation, useNavigate } from 'react-router-dom';
import * as style from './style';

import user from '../../assets/elipse.png';
import row from '../../assets/row.png'
import file from '../../assets/file-text.png';
import order from '../../assets/order.png';

interface PedidoViewProps {
    pedidoId: string;
}

interface Pedido {
    id: number;
    status: string;
    quantidade: number;
    cardapio: number;
    comanda: number;
    mesa: number;
}

interface Cardapio {
    id: number;
    nome: string;
    descricao: string;
    ingredientes: string;
    valor: number;
}

const PedidoView: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [pedido, setPedido] = useState<Pedido | null>(null);
    const [cardapio, setCardapio] = useState<Cardapio | null>(null);
    const pedidoId = new URLSearchParams(location.search).get('pedidoId');
    const handleVoltar = () => {
        navigate('/pedido');
    };


    useEffect(() => {
        const fetchPedido = async () => {
            const token = window.localStorage.getItem('authToken');
            if (!token) {
                console.error('Token de autenticação não encontrado');
                return;
            }
            try {
                setAuthHeader(token);
                if (pedidoId) {
                    const response = await api.get(`/pedido/${pedidoId}`);
                    const pedidoData: Pedido = response.data;
                    setPedido(pedidoData);

                    // Obter os detalhes do cardápio
                    const cardapioResponse = await api.get(`/cardapio/${pedidoData.cardapio}`);
                    const cardapioData: Cardapio = cardapioResponse.data;
                    setCardapio(cardapioData);
                }
            } catch (error) {
                console.error('Erro ao obter o pedido:', error);
            }
        };

        fetchPedido();
    }, [pedidoId]);

    const handlePronto = async () => {
        const token = window.localStorage.getItem('authToken');
        if (!token) {
            console.error('Token de autenticação não encontrado');
            return;
        }
        try {
            setAuthHeader(token);
            if (pedido) {
                const response = await api.patch(`/pedido/${pedido.id}`, { status: 'pronto' });
                navigate('/pedido');
            }
        } catch (error) {
            console.error('Erro ao alterar o status do pedido:', error);
        }
    };

    const handleDeletar = async () => {
        const token = window.localStorage.getItem('authToken');
        if (!token) {
            console.error('Token de autenticação não encontrado');
            return;
        }
        try {
            setAuthHeader(token);
            if (pedido) {
                await api.delete(`/pedido/${pedido.id}`);
                navigate('/pedido');
            }
        } catch (error) {
            console.error('Erro ao deletar o pedido:', error);
        }
    };

    const [showLogout, setShowLogout] = useState(false);

    const handleRowClick = () => {
        setShowLogout(!showLogout);
    };
    const handleLogout = () => {
        navigate('/');
    };
        return (
        <style.Container>
            <style.Header>
                <div className="user">
                    <img src={user} alt="Usuário" />
                    <div className="row" onClick={handleRowClick}>
                        <img src={row} alt="Flexa de Opções" />
                    </div>
                    {showLogout && (
                        <div className="logout-option" onClick={handleLogout}>
                            Sair
                        </div>
                    )}
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
                    {pedido && cardapio ? (
                        <div className="pedido">
                            <div className="cardapio">
                                <h1>Nº {pedido.id}</h1>
                                <h3 className="title">
                                    <span>Nome</span>
                                    {cardapio.nome}
                                </h3>
                                <h3 className="title">
                                    <span>Descrição</span>
                                    {cardapio.descricao}
                                </h3>
                                <h3 className="title">
                                    <span>Ingredientes</span>
                                    {cardapio.ingredientes}
                                </h3>
                                <h3 className="title">
                                    <span>Quantidade</span>
                                    {pedido.quantidade}
                                </h3>
                                <h3 className="title">
                                    <span>Mesa</span>
                                    {pedido.mesa}
                                </h3>
                                <h3 className="title">
                                    <span>Comanda</span>
                                    {pedido.comanda}
                                </h3>
                                <h3 className="title">
                                    <span>Valor unitário</span>
                                    R$ {cardapio.valor.toFixed(2)}
                                </h3>
                                <h4 className="title-value">
                                    <span>Total</span>
                                    R$ {(cardapio.valor * pedido.quantidade).toFixed(2)}
                                </h4>
                            </div>
                        </div>
                    ) : (
                        <p>Carregando pedido...</p>
                    )}
                    <div className="op">
                        <div className="voltar" onClick={handleVoltar}>Voltar</div>
                        <div className="deletar" onClick={handleDeletar}>Deletar</div>
                        <div className="salvar" onClick={handlePronto}>Pronto</div>
                    </div>
                </div>
            </style.Main>
        </style.Container>
    );
};

export default PedidoView;