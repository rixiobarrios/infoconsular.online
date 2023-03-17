import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Inicio from './Inicio';
import Consulares from './Consulares';
import Migracion from './Migracion';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>infoconsular.online</h1>
                    <p>
                        Bienvenidos a la pagina de informacion consular para
                        Venezolanos en EEUU.
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
                    </ul>
                    <div className="content"></div>
                    <Route exact path="/" component={Inicio} />
                    <Route path="/consulares" component={Consulares} />
                    <Route path="/migracion" component={Migracion} />
                </div>
            </HashRouter>
        );
    }
}

export default Main;
