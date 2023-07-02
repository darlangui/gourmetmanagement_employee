import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import * as style from './style';
import { api, setAuthHeader } from '../../services/api';

import user from '../../assets/elipse.png';
import row from '../../assets/row.png'
import file from '../../assets/file-text-select.png';
import order from '../../assets/order-unselect.png';
import input from '../../assets/input.png';
import search from '../../assets/search.png';
import rowBellow from '../../assets/rowBellow.png';

interface Cardapio{
    id: number;
    nome: string;
    ingredientes: string;
    valor: number;
    descricao: string;
    status: boolean;
    caminho: string;
}

const Cardapio: React.FC = () => {
    const [cardapioItems, setCardapioItems] = useState<Cardapio[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api('/cardapio');
                const items = response.data;
                const itemsWithImages = await Promise.all(
                    items.map(async (item: Cardapio) => {
                        const imageResponse = await api(`/media/${item.caminho}`, {
                            responseType: 'blob',
                        });
                        const imageUrl = URL.createObjectURL(imageResponse.data);

                        return { ...item, caminho: imageUrl };
                    })
                );

                setCardapioItems(itemsWithImages);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };

        fetchData();
    }, []);


    const handleEditItem = (item: Cardapio) => {
        navigate('/editItem', { state: { item } });
    };

    const handleAddItem = () => {
        navigate('/addItem');
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredItems = cardapioItems.filter((item) =>
        item.nome.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

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
                    <h1>Cardápio</h1>
                    <div className="search">
                            <label htmlFor="search">
                                <div className="input">
                                        <img src={search} alt={"Pesquisar"}/>
                                        <input
                                            id="search"
                                            type="search"
                                            placeholder="Buscar ..."
                                            value={searchTerm}
                                            onChange={handleSearch}
                                        />
                                </div>
                            </label>
                        <img src={input} alt="Adicionar" onClick={handleAddItem} />
                    </div>
                </div>
                <div className="content">
                    <div className="card-content">
                        {filteredItems.length > 0 ? (
                            <ul>
                                {filteredItems.map((item) => (
                                    <li key={item.id}>
                                        <div className="card">
                                            <img src={item.caminho} alt={item.nome} />
                                            <span>{item.nome}</span>
                                            <div className="price">
                                                <h3>R$ {item.valor}</h3>
                                                <img src={rowBellow} alt="seta" onClick={() => handleEditItem(item)} />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Infelizmente nada foi encontrado!</p>
                        )}
                    </div>
                </div>
            </style.Main>
        </style.Container>
    );
};

export default Cardapio;