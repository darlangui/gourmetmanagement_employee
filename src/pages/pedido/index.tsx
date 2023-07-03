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
interface Pedido{
    id: number,
    status: string,
    quantidade: number;
    cardapio: number;
    comanda: number;
    mesa: number;
}

const Pedido: React.FC = () => {
    const navigate = useNavigate();
    const handlePedido = () => {
        navigate('/pedido');
    };

    const handleCardapio = () => {
        navigate('/cardapio');
    };

    const [precosCardapio, setPrecosCardapio] = useState<{ [key: number]: number }>({});
    const [valor, setValor] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValor(e.target.value);
    };

    const [pedidos, setPedidos] = useState<Pedido[]>([]);
    const [pedidosFiltrados, setPedidosFiltrados] = useState<Pedido[]>([]);

    const fetchPedidos = async () => {
        const token = window.localStorage.getItem('authToken');
        if (!token) {
            console.error('Token de autenticação não encontrado');
            return;
        }
        try {
            setAuthHeader(token);
            const response = await api.get('/pedido');
            const pedidosData: Pedido[] = response.data;
            setPedidos(pedidosData);

            // Obter os preços dos cardápios relacionados
            const precos: { [key: number]: number } = {};
            await Promise.all(
                pedidosData.map(async (pedidoData: Pedido) => {
                    const cardapioResponse = await api.get(`/cardapio/${pedidoData.cardapio}`);
                    const cardapio = cardapioResponse.data;
                    precos[pedidoData.cardapio] = cardapio.valor;
                })
            );
            setPrecosCardapio(precos);
        } catch (error) {
            console.error('Erro ao obter os pedidos:', error);
        }
    };

    useEffect(() => {
        fetchPedidos();
    }, []);

    useEffect(() => {
        if (valor === '') {
            setPedidosFiltrados(pedidos);
        } else {
            const filteredPedidos = pedidos.filter((pedido) =>
                pedido.id.toString().includes(valor)
            );
            setPedidosFiltrados(filteredPedidos);
        }
    }, [valor, pedidos]);

    const redirectItemPedido = (pedido: Pedido) => {
        navigate(`/pedidoView?pedidoId=${pedido.id}`);
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
                    <h1>Pedidos</h1>
                    <div className="search">
                        <label htmlFor="search">
                            <div className="input">
                                <img src={search} alt={"Pesquisar"}/>
                                <input
                                    type="text"
                                    id="search"
                                    placeholder="Buscar ..."
                                    value={valor}
                                    onChange={handleChange}
                                />
                            </div>
                        </label>
                    </div>
                </div>
                <div className="content">
                    <div className="card-content">
                        {pedidosFiltrados.length === 0 ? (
                            <div>
                                <p>Nenhum item</p>
                            </div>
                        ) : (
                            pedidosFiltrados.map((pedido) => (
                                <div className="card" key={pedido.id}>
                                    <div className="header">
                                        <h1>Nº {pedido.id}</h1>
                                        <img src={rowBellow}  onClick={() => redirectItemPedido(pedido)} alt="Seta"/>
                                    </div>
                                    <div className="line"></div>
                                    <div className="main">
                                        <span>Items <h3>{pedido.quantidade} adicionado(s)</h3></span>
                                        <span className="total">Total <h3>R$ {precosCardapio[pedido.cardapio] * pedido.quantidade}</h3></span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </style.Main>
        </style.Container>
    );
};

export default Pedido;