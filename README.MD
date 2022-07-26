# 😻 Instacat

Instacat es una web app que hace uso de la API The API Cat para que tengas las imágenes de los gatos más bonitos del mundo, compuesta por Home, Search y Favorites.

Home: genera imágenes aleatorias y asombrosas de gatos, además de una tarjeta con la raza del día, acompañada de una breve descripción y otros datos de la raza.

Search: está compuesto de un buscador que contiene diferentes filtros para buscar imágenes de gatos.

Favorites: almacena las fotos marcadas como favoritas en el Home.

El Home, que contiene un Header (el cual se repite en cada página de la App), tiene los enlaces a esas otras dos páginas (Search & favorites).

Los componentes además del Header, son: la foto del día (Cat of the day), la raza del día (Breed of the day), el buscador en Search, el almacenamiento de las imágenes favoritas en Favorites.

El esbozo inicial o wireframe se encuentra en /public/Wireframe OhmyCat-Instacat App.pdf

# 🎲 Tecnologías

![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=plastic&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=plastic&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=plastic&logo=JavaScript&logoColor=black)
![React](https://img.shields.io/badge/-React-61DAFB?style=plastic&logo=react&logoColor=white)
![Jest](https://img.shields.io/badge/-Jest-C21325?style=plastic&logo=Jest&logoColor=white)
![Webpack](https://badges.aleen42.com/src/webpack.svg)

# 🎛 Configuración

Para configurar el proyecto, debes de clonarlo en tu equipo, o desde el cliente de GitHub para escritorio.

Una vez clonado, debes ejecutar el comando `npm install` para instalar los paquetes necesarios para el proyecto.

En la raiz del proyecto, crea un archivo `.env` y llenamo con la siguiente estructura, te puedes guiar del .env.example

```
REACT_APP_CATS_API_URL=https://api.thecatapi.com/v1
REACT_APP_CATS_API_KEY=<COLOCAR-LA-KEY-DEL-API>
REACT_APP_CATS_DAY_NUM=<COLOCAR-NUMERO-DE-GATOS-EN-EL-HOME-POR-DEFECTO-SALDRÁ-UNO>

```

Una vez creado el archivo `.env` puedes ejecutar `npm run start` para ejecutarlo localmente. Abrirá la aplicación en el puerto 8080

# 🦆 Testing

Antes de ejecutar las pruebas del proyecto debes de instalar jest de forma global `npm install jest -g`, si tienes problemas con permisos añade sudo al comando o corre la linea de comandos en modo administrador.

El proyecto cuenta con tres comandos para ejecutar las pruebas generadas:

1. `npm test`: Corre las pruebas mostrando el resultado de cada una
2. `jest --watch`: Corre las pruebas generadas y muestra el resultado, pero se mantiene escuchando los cambios que se realicen para correrlas nuevamente
3. `jest --coverage`: Genera el reporte de coverage generado por jest
