"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//debe empezar por mayuscula
function Principal() {
  var muestra;
  var nombreEntero;
  var edad;
  nombreEntero = "Esto es magia";
  edad = 19;
  muestra = nombreEntero + edad;
  return _react.default.createElement("div", {
    className: "divPrincipal"
  }, _react.default.createElement("h1", null, "Hola arenero"), _react.default.createElement("h2", null, muestra));
}

var elementoRaiz = document.getElementById("divRaiz");

_reactDom.default.render(_react.default.createElement(Principal, null), elementoRaiz);