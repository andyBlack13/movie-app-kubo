# KuboMovie

## Descripción

KuboMovie es una aplicación web desarrollada con Nuxt.js que permite a los usuarios buscar películas utilizando la API de The Movie Database (TMDb). La aplicación muestra una lista de películas basadas en la búsqueda del usuario y permite ver los detalles de cada película seleccionada.

## Características

- **Búsqueda de Películas:** Los usuarios pueden buscar películas por nombre.
- **Listado de Películas:** La aplicación muestra una lista de películas basadas en los resultados de la búsqueda.
- **Detalles de Película:** Al hacer clic en "Ver Detalles", los usuarios son redirigidos a una página con información detallada sobre la película seleccionada.
- **Cargadores de Esqueleto:** Mientras se cargan los datos, se muestran skeleton loaders para mejorar la experiencia del usuario.
- **Interfaz de Usuario:** Se utiliza PrimeVue para componentes de interfaz de usuario personalizados y estilizados.

## Tecnologías Utilizadas

- **Nuxt.js 3:** Framework principal para el desarrollo de la aplicación.
- **Vue 3:** Librería utilizada para la construcción de la interfaz de usuario.
- **TypeScript:** Utilizado para tipado estático y desarrollo seguro.
- **PrimeVue:** Biblioteca de componentes de interfaz de usuario.
- **API de TMDb:** Para obtener los datos de las películas.
- **CSS Grid:** Para el diseño responsivo de la lista de películas.

## Configuración del Proyecto

### Requisitos Previos

- **Node.js**: Asegúrate de tener instalado Node.js (versión 18 o superior).
- **NPM o Yarn**: Administrador de paquetes para instalar dependencias.

### Instalación

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/tu-usuario/movie-app-kubo.git
    cd movie-app-kubo
    ```

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    # o
    yarn install
    ```

3. Crea un archivo `.env` en la raíz del proyecto y añade tu clave API de TMDb:

    ```env
    TMDB_API_KEY=tu_clave_api_aqui
    ```

4. Inicia el servidor de desarrollo:

    ```bash
    npm run dev
    # o
    yarn dev
    ```

5. Abre tu navegador y visita `http://localhost:3000` para ver la aplicación en acción.
