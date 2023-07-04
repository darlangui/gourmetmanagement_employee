import React, {useState, useEffect, useRef} from 'react';
import { api, setAuthHeader } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import CurrencyInput from 'react-currency-input-field';
import * as style from './style';

import user from '../../assets/elipse.png';
import row from '../../assets/row.png'
import file from '../../assets/file-text-select.png';
import order from '../../assets/order-unselect.png';
import input from '../../assets/input.png';

const CardapioAdd: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const fileNameSpanRef = useRef<HTMLSpanElement>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const navigation = useNavigate();

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


    const [nome, setNome] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [valor, setValor] = useState(0);
    const [descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState<File | null>(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const token = window.localStorage.getItem('authToken');

        if (!token) {
            console.error('Token de autenticação não encontrado');
            return;
        }

        if (!nome) {
            setErrorMessage('Digite um nome para o produto.');
            return;
        }

        if (!imagem) {
            setErrorMessage('Selecione uma imagem.');
            return;
        }



        // Criando um novo FormData para incluir a imagem no corpo da requisição
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('ingredientes', ingredientes);
        formData.append('valor', String(valor));
        formData.append('descricao', descricao);
        formData.append('status', 'true');
        if (imagem) {
            formData.append('caminho', imagem);
        }
        setAuthHeader(token);
        try {
            const response = await api.post('/cardapio', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                validateStatus: (status) => status >= 200 && status < 400, // Adicione esta linha
            });

            if (response.status >= 200 && response.status < 400) {
                navigation('/cardapio');
            } else {
                setErrorMessage('Ocorreu um erro ao processar a solicitação. Tente novamente mais tarde.');
            }
        } catch (error: any) {
            console.error('Erro ao enviar os dados', error);
            setErrorMessage('Ocorreu um erro ao processar a solicitação. Tente novamente mais tarde.');
        }
    };

    const backCardapio = () => {
        navigation('/cardapio');
    };
    const [showLogout, setShowLogout] = useState(false);

    const handleRowClick = () => {
        setShowLogout(!showLogout);
    };
    const handleLogout = () => {
        navigation('/');
    };

    const formatCurrency = (value: string) => {
        // Remove o símbolo de moeda e qualquer caractere não numérico
        const cleanedValue = value.replace(/[^0-9]/g, '');

        // Divide o valor por 100 para obter o número decimal correto
        const floatValue = parseFloat(cleanedValue) / 100;

        // Define o estado com o valor formatado
        setValor(floatValue);
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
                    <h1>Adicionar novo item</h1>
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
                                value={`R$ ${valor.toFixed(2)}`}
                                onChange={(e) => formatCurrency(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="desc">
                        <label htmlFor="descricao">
                            <div className="title">
                                <div className="sub-title"><h3>Descrição</h3><span>(opcional)</span></div>
                                <span>Máximo 120 caracteres</span>
                            </div>
                            <textarea id="descricao" placeholder="Descrição do item" onChange={(e) => setDescricao(e.target.value)}></textarea>
                        </label>
                    </div>
                    <div className="ingred">
                        <label htmlFor="ingredientes">
                            <div className="title">
                                <div className="sub-title"><h3>Ingredientes</h3><span>(opcional)</span></div>
                                <span>Máximo 120 caracteres</span>
                            </div>
                            <textarea id="ingredientes" placeholder="Ingredientes do seu item" onChange={(e) => setIngredientes(e.target.value)}></textarea>
                        </label>
                    </div>
                    <div className="image">
                        <label htmlFor="caminho">
                            <h3>Imagem</h3>
                            <input
                                type="file"
                                id="caminho"
                                ref={fileInputRef}
                                onChange={(e) => setImagem(e.target.files ? e.target.files[0] : null)}
                                required
                            />
                            <div className="select">
                                <span id="inputName" ref={fileNameSpanRef}>Imagem do seu item</span>
                                <div className="select-item">Selecionar</div>
                            </div>
                        </label>
                    </div>
                    <div className="op">
                        <div className="voltar" onClick={backCardapio}>Voltar</div>
                        <div className="salvar" onClick={handleSubmit}>Salvar</div>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                    </div>
                </div>
            </style.Main>
        </style.Container>
    );
};

export default CardapioAdd;