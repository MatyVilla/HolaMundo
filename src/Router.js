import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SeccionPruebas from "./components/Pruebas";
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Error from "./components/Error";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer"
import Home from "./components/Home";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";
import Params from "./components/Params";

class Router extends Component {
    render() {
        return (

            <BrowserRouter>
                <Header />





                <Switch>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/formulario" component={Formulario} />
                    <Route exact path="/peliculas" component={Peliculas} />
                    <Route exact path="/pruebas/:nombre/:apellidos?" component={Params} />
                    <Route exact path="/pagina-1" render={() => (
                        <h1>hola mundo</h1>
                    )} />
                    <Route component={Error} />
                </Switch>
                <div class="clearfix"></div>


                <Footer />
            </BrowserRouter>
        );
    }
}

export default Router;