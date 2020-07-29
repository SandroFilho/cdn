import React from 'react';
import logo from '../../assets/imagens/logo.png';
import '../Menu/Menu.css';
//import ButtonLink from './ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt="Coida de Nerd" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;