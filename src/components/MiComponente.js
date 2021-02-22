import React, { Component } from 'react';

class MiComponente extends Component {

    render() {
        let receta = {
            nombre: 'pizza',
            ingredientes: ['tomate', 'masa delgada'],
            calorias: 400
        }
        return (
            <React.Fragment>
                <h1>Receta de {receta.nombre}</h1>
                <h2>Ingredientes</h2>
                
                    {receta.ingredientes.map((ingrediente, i) => {
                        return(
                            <li>ingrediente</li>

                        );
                    })}
                
                <h2>Calorias</h2>
                <li>
                {receta.calorias + ' Calorias.'}
                </li>
            </React.Fragment>
        )
    }

}

export default MiComponente;