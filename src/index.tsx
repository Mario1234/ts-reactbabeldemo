import React from 'react';
import ReactDOM from "react-dom";

//debe empezar por mayuscula
function Principal() {
  return (
    <div className="divPrincipal">
      <h1>Hola arenero</h1>
      <h2>Esto es magia</h2>
    </div>
  );
}

const elementoRaiz = document.getElementById("divRaiz");
ReactDOM.render(<Principal />, elementoRaiz);