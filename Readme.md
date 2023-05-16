# Aplicación de Películas en React.js

Esta es una aplicación en React.js que muestra información sobre películas utilizando la API de TMDB (The Movie Database). Permite a los usuarios buscar películas por título, ver detalles de películas individuales.

## Requisitos previos

Antes de ejecutar la aplicación, asegúrate de tener instalado lo siguiente:

- Node.js: [Descargar Node.js](https://nodejs.org)
- npm: npm se instala automáticamente junto con Node.js

## Configuración

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona el repositorio:

   ```shell
   git clone https://github.com/pevescarol/movies-react-cac.git
   ```

2. Navega hasta el directorio del proyecto:

  ```shell
   cd movies-react-cac
  ```

3. Instala las dependencias:
  ```shell
   npm install
  ```

## Uso

Sigue estos pasos para ejecutar la aplicación:

1. Obtén las credenciales de API de TMDB:
- Visita el sitio web de [TMDB](https://www.themoviedb.org/)
- Ve a la página de API y solicta tus credenciales.
- Copia tus credenciales y reemplaza con tu token en el archivo donde se realiza la llamada a la API **(httpClient.js)** en la carpeta utils.

O puedes utilizar las credenciales que ya vienen con el repositorio.

2. Inicia la aplicación:

  ```shell
   npm start
  ```

3. Abre tu navegador web y ve a **http://localhost:3000**.
La aplicación se cargará y podrás comenzar a explorar y buscar películas.

## Funcionalidades *al momento*

La aplicación de películas en React.js ofrece las siguientes funcionalidades principales:

- Búsqueda de películas: Los usuarios pueden buscar películas por título utilizando la barra de búsqueda.

- Detalles de películas: Al hacer clic en una película en la lista de resultados de búsqueda, se muestra una página con detalles adicionales de la película, como el título, la sinopsis,los géneros y el póster.


### Créditos

Este proyecto fue creado como parte de la práctica para el curso de React por parte del [programa Codo a Codo](https://agenciadeaprendizaje.bue.edu.ar/).