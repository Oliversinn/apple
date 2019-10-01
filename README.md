# Apple 

El objetivo de este proyecto es copiar la pagina oficial de Apple (para la fecha 30/09/19). Esto utilizando Node, Webpack y React.

## Distribucion de Archivos

Dentro de la carpeta src unicamente se encuentra el archivo CSS con estilos que utiliza el archivo JSX donde esta la pagina web escrita con React.

En la carpeta dist estan los dos archivos generados por Webpack.

## Instalacion de Paquetes

En este proyecto se utiliza Node principalmente. En las dependencias Necesitamos instalar Webpack, Babel y React.

* `webpack`: La base de webpack.
* `webpack-cli`: Para habilitar comandos de webpack en la consola.
* `webpack-dev-server`: Servidor de desarrollo de webpack.
* `react`: La librería de react.
* `react-dom`: La otra librería de react para trabajar con el Dom
* `@babel/core`: La base de babel, el compilador de javascript moderno.
* `@babel/preset-env`: Para que babel pueda compilar ECMAScript 6.
* `@babel/preset-react`: Para que babel pueda compilar jsx.
* `babel-loader`: para que webpack utilice babel.
* `css-loader`: para que webpack pueda importar css.
* `style-loader`: Injecta CSS en el DOM.

## Uso

Para ver el resultado final, pueden ver el archivo `dist/index.html` el cual es generado por Webpack.
