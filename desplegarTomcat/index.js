"use strict";

var _react = _interopRequireDefault(React);

var _reactDom = _interopRequireDefault(ReactDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//debe empezar por mayuscula
function Principal() {
  return _react.default.createElement("div", {
    className: "divPrincipal"
  }, _react.default.createElement("h1", null, "Hola arenero"), _react.default.createElement("h2", null, "Esto es magia"));
}

var elementoRaiz = document.getElementById("divRaiz");

_reactDom.default.render(_react.default.createElement(Principal, null), elementoRaiz);