# ts-reactbabeldemo
Demo de React transcompilado de Typescript a JavaScript con Babel

**---INSTALACION COMPLETA---**

Instalar node js en el ordenador

Abrir con Visual Studio Code la carpeta del proyecto

Cambiar al directorio de la carpeta del proyecto: `cd ts-reactbabeldemo`

Ejecutar el trasncompilado con el comando: `npm run build`

Modificar el archivo resultado index.js, cambiando `require("react")` por `React` y `require("react-dom")` por `ReactDOM`


**---INSTALACION BASICA---**

Instalar servidor Tomcat Apache 9 en el escritorio

Copiar todos los archivos de la carpeta desplegarTomcat a la carpeta C:\Users\ElPutoAmo\Desktop\apache-tomcat-9.0.6\webapps\docs

Modificar el archivo index.jsp de la carpeta C:\Users\ElPutoAmo\Desktop\apache-tomcat-9.0.6\webapps\ROOT:
  
  Añadir la linea `<h4><a href="${tomcatDocUrl}typescriptReact.html">TypeScriptReact</a></h4>` debajo de la linea `<h3>Recommended Reading:</h3>`


**---EJECUCION---**

Ejecutar el archivo startup.bat de la carpeta C:\Users\ElPutoAmo\Desktop\apache-tomcat-9.0.6\bin
Abrir navegador Web en la pagina `localhost:8080`


**---ACTUALIZACION---**

En caso de querer actualizar los paquetes node de babel seguir estos pasos en el terminal de Visual Studio Code:
`npm install --save-dev typescript@2.9.1
npm install --save-dev @babel/core@7.0.0-beta.49
npm install --save-dev @babel/cli@7.0.0-beta.49
npm install --save-dev @babel/plugin-proposal-class-properties@7.0.0-beta.49
npm install --save-dev @babel/plugin-proposal-object-rest-spread@7.0.0-beta.49
npm install --save-dev @babel/preset-env@7.0.0-beta.49
npm install --save-dev @babel/preset-typescript@7.0.0-beta.49`

Actualizar las librerias React de Babel:
`npm install --save react react-dom @types/react @types/react-dom
npm install --save-dev @babel/preset-react@7.0.0-beta.49`
