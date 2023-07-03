import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./style";
import { api, setAuthHeader } from "../../services/api";

import user from "../../assets/elipse.png";
import row from "../../assets/row.png";
import file from "../../assets/file-text.png";
import order from "../../assets/order.png";
import input from "../../assets/input.png";
import search from "../../assets/search.png";
import rowBellow from "../../assets/rowBellow.png";

interface Comanda {
  id: number;
  total: number;
  qrcode: string;
  caminho: string;
}

const Comandas: React.FC = () => {
  const [comandas, setComandas] = useState<Comanda[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api("/comanda");
        const items = response.data;
        const itemsWithImages = await Promise.all(
          items.map(async (item: Comanda) => {
            const imageResponse = await api(`/media${item.caminho}`, {
              responseType: "blob",
            });
            const imageUrl = URL.createObjectURL(imageResponse.data);

            return { ...item, caminho: imageUrl };
          })
        );

        setComandas(itemsWithImages);
        console.log(comandas)
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, []);

  const handleEditItem = (item: Comanda) => {
    navigate("/comandaView", { state: { item } });
  };

  const handleAddItem = () => {
    // navigate("/addItem");
    const token = window.localStorage.getItem('authToken');

    if (!token) {
        console.error('Token de autenticação não encontrado');
        return;
    }
   
    setAuthHeader(token);
    api
        .post(`mesa`)
        .then((response) => {
            console.log('Item criado com sucesso!');
            navigate('/mesas');
        })
        .catch((error) => {
            console.error('Erro ao criar o item:', error);
        });
    

  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = comandas.filter((item) =>
    // item.nome.toLowerCase().startsWith(searchTerm.toLowerCase())
    item.id
  );

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
          <img src={file} alt="Cardapio" />
        </div>
        <div className="order">
          <img src={order} alt="Pedidos" />
        </div>
      </style.Header>
      <style.Main>
        <div className="nav">
          <h1>Comandas</h1>
          <div className="search">
            <label htmlFor="search">
              <div className="input">
                <img src={search} alt={"Pesquisar"} />
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
                      <img src={item.caminho} alt='QR Code da Comanda' />
                      {/* <span>{item.id}</span> */}
                      <div className="price">
                        <h3>Comanda {item.id}</h3>
                        <img
                          src={rowBellow}
                          alt="seta"
                          onClick={() => handleEditItem(item)}
                        />
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

export default Comandas;
