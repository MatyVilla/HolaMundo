import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Peliculas from "./Peliculas";

class Home extends Component {
    render() {
        return (
            <div id="center">
                <Slider 
                title="Bienvenidos al apartado de peliculas"
                btn="Ir a blog"
                className="slider-big"
                />
                <div className="center">
                    <div id="content">
                        <h2>No hay articulos</h2>
                    </div>
                <Sidebar 
                blog="true"/>
                </div>
            </div>
        );
    }
}

export default Home;