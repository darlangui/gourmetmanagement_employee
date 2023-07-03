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

interface Mesa {
  id: number;
  qrcode: string;
  caminho: string;
}

const Mesas: React.FC = () => {
  const [mesas, setMesas] = useState<Mesa[]>([]);

  const navigate = useNavigate();
  const handlePedido = () => {
      navigate('/pedido');
  };

  const handleCardapio = () => {
      navigate('/cardapio');
  };

  const handleMesas = () => {
      navigate('/mesas');
  };

  const handleComandas = () => {
      navigate('/comandas');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api("/mesa");
        const items = response.data;
        const itemsWithImages = await Promise.all(
          items.map(async (item: Mesa) => {
            const imageResponse = await api(`/media/${item.caminho}`, {
              responseType: "blob",
            });
            const imageUrl = URL.createObjectURL(imageResponse.data);

            return { ...item, caminho: imageUrl };
          })
        );

        setMesas(itemsWithImages);
        console.log(mesas)
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, []);

  const handleEditItem = (item: Mesa) => {
    navigate("/mesaView", { state: { item } });
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

  const filteredItems = mesas.filter((item) =>
    // item.nome.toLowerCase().startsWith(searchTerm.toLowerCase())
    item.id
  );
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
              <img src={file} onClick={handleCardapio} alt="Cardapio"/>
          </div>
          <div className="order">
              <img src={order} onClick={handlePedido} alt="Pedidos"/>
          </div>
      </style.Header>
      <style.Main>
      <div className="nav">
        <div className="option">
            <h1 onClick={handleMesas}>Mesas</h1>
            <h3 onClick={handlePedido}>Pedidos</h3>
            <h3 onClick={handleComandas}>Comandas</h3>
        </div>
        <div className="search">
            <label htmlFor="search">
                {/* <div className="input">
                    <img src={search} alt={"Pesquisar"}/>
                    <input
                        type="text"
                        id="search"
                        placeholder="Buscar ..."
                        value={valor}
                        onChange={handleChange}
                    />
                </div> */}
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
                      <img src={item.caminho} alt='QR Code da Mesa' />
                      {/* <span>{item.nome}</span> */}
                      <div className="price">
                        <h3>Mesa {item.id}</h3>
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

export default Mesas;
