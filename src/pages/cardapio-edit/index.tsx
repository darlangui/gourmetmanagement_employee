import React, {useState, useEffect, useRef} from 'react';
import * as style from './style';
import { api, setAuthHeader } from '../../services/api';
import { useNavigate, useLocation } from 'react-router-dom';
import user from "../../assets/elipse.png";
import row from "../../assets/row.png";
import file from '../../assets/file-text-select.png';
import order from '../../assets/order-unselect.png';
import input from "../../assets/input.png";

interface Cardapio{
    id: number;
    nome: string;
    ingredientes: string;
    valor: number;
    descricao: string;
    status: boolean;
    caminho: string;
}

const  CardapioEdit: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const fileNameSpanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const fileInput = fileInputRef.current;
        const fileNameSpan = fileNameSpanRef.current;

        if (fileInput && fileNameSpan) {
            const handleFileInputChange = (e: Event) => {
                const target = e.target as HTMLInputElement;
                const files = target.files;
                if (files && files.length > 0) {
                    const fileName = files[0].name;
                    fileNameSpan.textContent = fileName;
                }
            };

            fileInput.addEventListener('change', handleFileInputChange);

            return () => {
                fileInput.removeEventListener('change', handleFileInputChange);
            };
        }
    }, []);

    const location = useLocation();
    const navigate = useNavigate();

    const item = location.state?.item;


    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");
    const [ingredientes, setIngredientes] = useState("");

    const [imagem, setImagem] = useState<File | null>(null);

    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        if(item) {
            console.log(item);
            api.get(`cardapio/${item.id}`)
                .then((response) => {
                    // set state here
                    const data = response.data;
                    console.log(data)
                    setNome(data.nome);
                    setPreco(data.valor);
                    setDescricao(data.descricao);
                    setIngredientes(data.ingredientes);
                    setImagem(data.caminho);
                })
                .catch((error) => {
                    console.error('Erro ao buscar os dados:', error);
                });
        } else {
            navigate('/cardapio');
        }
    }, [item, navigate]);


    const handleDelete = () => {
        const token = window.localStorage.getItem('authToken');

        if (!token) {
            console.error('Token de autenticação não encontrado');
            return;
        }
        if (item) {
            setAuthHeader(token);
            const { id } = item;
            api
                .delete(`cardapio/${id}`)
                .then((response) => {
                    console.log('Item deletado com sucesso!');
                    navigate('/cardapio');
                })
                .catch((error) => {
                    console.error('Erro ao deletar o item:', error);
                });
        }
    };

    const handleSave = () => {
        const token = window.localStorage.getItem('authToken');

        if (!token) {
            console.error('Token de autenticação não encontrado');
            return;
        }
        if (item) {
            setAuthHeader(token);
            const { id } = item;
            const data = {
                nome,
                ingredientes,
                valor: parseFloat(preco),
                descricao,
                status: true,
                caminho: imagem ? imagem.name : '',
            };
            api
                .put(`cardapio/${id}`, data)
                .then((response) => {
                    console.log('Item salvo com sucesso!');
                    navigate('/cardapio');
                })
                .catch((error) => {
                    console.error('Erro ao salvar o item:', error);
                });
        }
    };

    const handleBack = () =>{
        navigate('/cardapio');
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
                    <h1>Editar item do cardápio</h1>
                    <div className="search">
                        <button type="submit">
                            Salvar
                        </button>
                    </div>
                </div>
                <div className="content">
                    <div className="name">
                        <label htmlFor="nome">
                            <h3>Nome</h3>
                            <input
                                type="text"
                                id="nome"
                                placeholder="Nome do item do seu cardápio"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="price">
                        <label htmlFor="preco">
                            <h3>Preço</h3>
                            <input
                                type="text"
                                id="preco"
                                placeholder="R$ 0,00"
                                value={preco}
                                onChange={(e) => setPreco(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="desc">
                        <label htmlFor="descricao">
                            <div className="title">
                                <div className="sub-title"><h3>Descrição</h3><span>(opcional)</span></div>
                                <span>Máximo 120 caracteres</span>
                            </div>
                            <textarea id="descricao" placeholder="Descrição do item" value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                        </label>
                    </div>
                    <div className="ingred">
                        <label htmlFor="ingredientes">
                            <div className="title">
                                <div className="sub-title"><h3>Ingredientes</h3><span>(opcional)</span></div>
                                <span>Máximo 120 caracteres</span>
                            </div>
                            <textarea id="ingrecientes" placeholder="Ingredientes do seu item" value={ingredientes} onChange={(e) => setIngredientes(e.target.value)}></textarea>
                        </label>
                    </div>
                    <div className="image">
                        <label htmlFor="image">
                            <h3>Imagem</h3>
                            <input
                                type="file"
                                id="image"
                                ref={fileInputRef}
                            />
                            <div className="select">
                                <span id="inputName" ref={fileNameSpanRef}>Imagem do seu item</span>
                                <div className="select-item">Selecionar</div>
                            </div>
                        </label>
                    </div>
                    <div className="op">
                        <div className="voltar" onClick={handleBack}>Voltar</div>
                        <div className="deletar" onClick={handleDelete}>Deletar</div>
                        <div className="salvar" onClick={handleSave}>Salvar</div>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                    </div>
                </div>
            </style.Main>
        </style.Container>
    );
}

export default CardapioEdit;