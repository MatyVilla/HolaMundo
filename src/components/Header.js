import React, { Component } from "react";
import Logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header id="header">
                    <div className="center">
                        {/*LOGO */}
                        <div id="logo">
                            <img src={Logo} className="app-logo" alt="Logotipo" />
                            <span id="brand">
                                <strong>React</strong>e-Commerce
                    </span>
                        </div>

                        {/*MENU*/}
                        <nav id="menu">
                            <ul>
                                <li>
                                    <NavLink to='/home' activeClassName="active">Inicio</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/formulario" activeClassName="active">Formulario</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/pruebas/matias/villalobos" activeClassName="active">nombre</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/peliculas" activeClassName="active">Pelicula</NavLink>
                                </li>
                            </ul>
                        </nav>

                        {/*LIMPIAR FLOTADOS*/}
                        <div className="clearfix"></div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;