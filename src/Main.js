import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Inicio from './Inicio';
import Consulares from './Consulares';
import Migracion from './Migracion';
import Ayuda from './Ayuda';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <img
                        src="/infoconsulogo.png"
                        alt="infoconsular.online logo"
                    />
                    <p>
                        Bienvenidos a la página de información consular para
                        Venezolanos en EEUU
                    </p>
                    <ul className="header">
                        <li>
                            <NavLink exact to="/">
                                Início
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/consulares">
                                Asuntos Consulares
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/migracion">
                                Asuntos Migratorios
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/ayuda">Ayuda</NavLink>
                        </li>
                    </ul>
                    <div className="content"></div>
                    <Route exact path="/" component={Inicio} />
                    <Route path="/consulares" component={Consulares} />
                    <Route path="/migracion" component={Migracion} />
                    <Route path="/ayuda" component={Ayuda} />
                </div>
            </HashRouter>
        );
    }
}

export default Main;
