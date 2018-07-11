import React from 'react';
import ReactDOM from "react-dom";

//debe empezar por mayuscula
function Principal() {
  let muestra : string;
  let nombreEntero : string;
  let edad : number;
  nombreEntero = "Esto es magia";
  edad = 19;
  muestra = nombreEntero + edad;
  return (
    <div className="divPrincipal">
      <h1>Hola arenero</h1>
      <h2>{muestra}</h2>
    </div>
  );
}

const elementoRaiz = document.getElementById("divRaiz");
ReactDOM.render(<Principal />, elementoRaiz);