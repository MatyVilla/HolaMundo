import { useParams } from "react-router-dom";
import React, { Component } from "react";

const Params = () =>{
        const { nombre } = useParams();
        return (
            <h1>este id es: {nombre}</h1>
        );
}
export default Params;