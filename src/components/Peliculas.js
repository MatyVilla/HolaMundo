import React, { Component, Fragment } from "react";
import Pelicula from "./Pelicula";
import Sidebar from "./Sidebar";
import Slider from "./Slider";
class Peliculas extends Component {
    state = {
        peliculas: [
            { titulo: 'IronMan 3', image: 'http://es.web.img3.acsta.net/medias/nmedia/18/77/86/82/20486826.jpg' },
            { titulo: 'Fast & Furiuos', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Fast_and_Furious_Poster.jpg/220px-Fast_and_Furious_Poster.jpg' }
        ],
        nombre: 'Matias villalobos',
        favorita: []
    };
    favorita = (pelicula, indice) => {
        this.setState({
            favorita: pelicula,
            indice: indice + 1
        })
    }
    render() {

        return (
            <Fragment>
                <Slider
                    title="Peliculas"
                    className="slider-small" />
                <div className="center">
                    <div id="content" className="peliculas">
                        <h2 className="subheader">Listado de peliculas</h2>
                        {this.state.favorita.titulo ? (

                            <p>Peliculas favoritas de {this.state.nombre} es: {this.state.favorita.titulo} indice {this.state.indice}</p>
                        ) : (
                                <p>No hay pelicula favorita</p>
                            )
                        }
                        {/* crear componentes de peliculas(lista) */}
                        <div id="articles" className="peliculas">
                            {this.state.peliculas.map((pelicula, i) => {
                                return (
                                    <Pelicula
                                        key={i}
                                        indice={i}
                                        pelicula={pelicula}
                                        marcarFavorita={this.favorita} />
                                )
                            })}
                        </div>

                    </div>
                    <Sidebar />
                </div>

            </Fragment>
        );
    }
}
export default Peliculas;