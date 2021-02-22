import React, { Component, Fragment, createRef } from "react";
import Sidebar from "./Sidebar";

class Formulario extends Component {
    nombre = createRef();
    apellidos = createRef();
    bio = createRef();
    generoH = createRef();
    generoM = createRef();
    generoO = createRef();
    state = {
        user: {}
    }

    recivirFormulario = (e) => {
        e.preventDefault();
        let genero;
        if (this.generoH.current.checked) {
            genero = this.generoH.current.value
        } else if (this.generoM.current.checked) {
            genero = this.generoM.current.value
        } else if (this.generoO.current.checked) {
            genero = this.generoO.current.value
        }
        this.setState({
            user: {
                nombre: this.nombre.current.value,
                apellidos: this.apellidos.current.value,
                bio: this.bio.current.value,
                genero: genero
            }
        })
    }
    render() {
        return (

            <div className="center">
                <div id="content">
                    <h2 className="subheader">Fromulario</h2>
                    {this.state.user.nombre &&
                        <div id='user-data'>
                            <p>Nombre: <strong>{this.state.user.nombre}</strong></p>
                            <p>Apellido: <strong>{this.state.user.apellidos}</strong></p>
                            <p>bio: <strong>{this.state.user.bio}</strong></p>
                            <p>genero: <strong>{this.state.user.genero}</strong></p>
                        </div>
                    }
                    <form className="mid-form" onSubmit={this.recivirFormulario}>
                        <div className="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" ref={this.nombre} />
                        </div>

                        <div className="form-group">
                            <label for="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" ref={this.apellidos} />
                        </div>

                        <div className="form-group">
                            <label for="bio">Biografia</label>
                            <textarea name="bio" ref={this.bio}></textarea>
                        </div>

                        <div className="form-group radibuttons">
                            <input type="radio" name="genero" value="hombre" ref={this.generoH} /> Hombre
                            <input type="radio" name="genero" value="mujer" ref={this.generoM} /> Mujer
                            <input type="radio" name="genero" value="otro" ref={this.generoO} /> Otro
                        </div>

                        <div className="clearfix"></div>

                        <input type="submit" value="Enviar" className="btn btn-success" />

                    </form>
                </div>
                <Sidebar />
            </div>

        );
    }
}

export default Formulario;