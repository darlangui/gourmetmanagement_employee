import React, {useState, useEffect, useRef} from 'react';
import * as style from './style';

import user from '../../assets/elipse.png';
import row from '../../assets/row.png'
import file from '../../assets/file-text.png';
import order from '../../assets/order.png';
import input from '../../assets/input.png';
import search from '../../assets/search.png';
const HomePage: React.FC = () => {
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
                    <h1>Cardápio</h1>
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
                        <img src={input} alt="Adicionar"/>
                    </div>
                </div>
                <div className="content">

                </div>
            </style.Main>
        </style.Container>
    );
};

export default HomePage;