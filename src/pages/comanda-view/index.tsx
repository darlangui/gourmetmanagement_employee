import React, {useState, useEffect, useRef} from 'react';
import * as style from './style';
import { api, setAuthHeader } from '../../services/api';
import { useNavigate, useLocation } from 'react-router-dom';
import user from "../../assets/elipse.png";
import row from "../../assets/row.png";
import file from "../../assets/file-text.png";
import order from "../../assets/order.png";
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

const ComandaView: React.FC = () => {
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


    const [ID, setID] = useState("");
    // const [preco, setPreco] = useState("");
    // const [descricao, setDescricao] = useState("");
    // const [ingredientes, setIngredientes] = useState("");

    const [imagem, setImagem] = useState<File | null>(null);

    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        if(item) {
            console.log(item);
            api.get(`comanda/${item.id}`)
                .then((response) => {
                    // set state here
                    const data = response.data;
                    console.log(data)
                    setID(data.id);
                    // setPreco(data.valor);
                    // setDescricao(data.descricao);
                    // setIngredientes(data.ingredientes);
                    setImagem(data.caminho);
                })
                .catch((error) => {
                    console.error('Erro ao buscar os dados:', error);
                });
        } else {
            navigate('/mesas');
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
                .delete(`comanda/${id}`)
                .then((response) => {
                    console.log('Item deletado com sucesso!');
                    navigate('/comandas');
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
                id,
                // ingredientes,
                // valor: parseFloat(preco),
                // descricao,
                // status: true,
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

    const backComandas = () => {
        navigate('/comandas')
    }

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
                    <h1>Visualizar QR Code da Comanda {ID}</h1>
                    <div className="search">
                        <button type="submit">
                            Salvar
                        </button>
                    </div>
                </div>
                <div className="content">
                    {/* <div className="name">
                        <label htmlFor="nome">
                            <h3>Mesa {ID}</h3>
                        </label>
                    </div> */}
                    <div className="image">
                        <label htmlFor="image">
                            {/* <h3>QR Code</h3> */}
                            <img src={item.caminho} alt={item.id} />
                        </label>
                    </div>
                    <div className="op">
                        <div className="voltar"  onClick={backComandas}>Voltar</div>
                        <div className="deletar" onClick={handleDelete}>Deletar</div>
                        {/* <div className="salvar" onClick={handleSave}>Salvar</div> */}
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                    </div>
                </div>
            </style.Main>
        </style.Container>
    );
}

export default ComandaView;