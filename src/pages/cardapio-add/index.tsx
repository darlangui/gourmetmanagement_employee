import React, {useState, useEffect, useRef} from 'react';
import * as style from './style';

import user from '../../assets/elipse.png';
import row from '../../assets/row.png'
import file from '../../assets/file-text.png';
import order from '../../assets/order.png';
import input from '../../assets/input.png';
import search from '../../assets/search.png';
import rowBellow from '../../assets/rowBellow.png';

import fixed from '../../assets/hanburguer.png';

const CardapioAdd: React.FC = () => {
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
                            />
                        </label>
                    </div>
                    <div className="desc">
                        <label htmlFor="descricao">
                            <div className="title">
                                <div className="sub-title"><h3>Descrição</h3><span>(opcional)</span></div>
                                <span>Máximo 120 caracteres</span>
                            </div>
                            <textarea id="descricao" placeholder="Descrição do item"></textarea>
                        </label>
                    </div>
                    <div className="ingred">
                        <label htmlFor="ingredientes">
                            <div className="title">
                                <div className="sub-title"><h3>Ingredientes</h3><span>(opcional)</span></div>
                                <span>Máximo 120 caracteres</span>
                            </div>
                            <textarea id="ingrecientes" placeholder="Ingredientes do seu item"></textarea>
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
                        <div className="voltar">Voltar</div>
                        <div className="salvar">Salvar</div>
                    </div>
                </div>
            </style.Main>
        </style.Container>
    );
};

export default CardapioAdd;