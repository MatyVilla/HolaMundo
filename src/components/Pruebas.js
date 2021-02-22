import React,{ Component } from "react";

class Pruebas extends Component {


    state = {
        contador: 0
    }

    sumar = (e) => {
        this.setState({
            contador: (this.state.contador + 1)
        });
    }
    restar = (e) => {
        this.setState({
            contador: (this.state.contador - 1)
        })
    }
    render(){
        return(
            <React.Fragment>
                <h2 class="subheader">Últimos artículos</h2>
                
                {/* <script type="text/javascript">
                    window.addEventListener("load", function(){
                        var template = document.getElementById("article-template");
                        var articles = document.getElementById("articles");

                        for(var i = 1; i <= 5; i++){
                            var clonado = template.cloneNode(true);
                            clonado.removeAttribute("id");

                            var h2 = clonado.getElementsByTagName("h2")[0];
                            h2.innerHTML = h2.textContent + ' ' + i;

                            articles.appendChild(clonado);
                        }
        
                    });
                </script> */}

                {/*Listado articulos*/}
                <div id="articles">
                    <article class="article-item" id="article-template">
                        <div class="image-wrap">
                            <img src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8" alt="Paisaje" />
                        </div>
    
                        <h2>Articulo de prueba</h2>
                        <span class="date">
                            Hace 5 minutos
                        </span>
                        <a href="#">Leer más</a>

                        <div class="clearfix"></div>
                    </article>

                {/*AÑADIR ARTICULOS VIA JS*/}

                </div>
                <h2>Estado</h2>
                <p>
                    Contado: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar}></input>
                    <input type="button" value="Restar" onClick={this.restar}></input>
                </p>
            </React.Fragment>
        );
    }
}


export default Pruebas;