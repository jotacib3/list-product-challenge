# Documentación y explicación:

Diseño de Sistema
En uey.mx ofrecemos productos que el cliente puede comprar o rentar para su evento. Por ejemplo, el cliente
puede comprar bebidas o rentar mesas para su fiesta de cumpleaños.

Estamos diseñando una nueva plataforma web usando ReactJS. Para esta nueva plataforma vamos a tener la
vista del producto donde el usuario puede conocer todo acerca del producto que está consultando.
Nosotros tenemos actualmente tres tipos de productos:

1. Productos simples. Estos son productos que se compran y se envían a la dirección especificada. Por
   ejemplo bebidas.
2. Productos rentables. Estos son productos que se rentan para una fecha. Por ejemplo unas mesas para
   renta. Existen distintos tipos de rentas:

   a. Por noche

   b. Por horas
3. Espacios. Estos son lugares que se rentan para hacer eventos. Por ejemplo, un salón de fiestas.
   Nosotros queremos diseñar un componente o componentes que nos desplieguen la información pertinente del
   producto. Todos los productos contienen la siguiente información básica:
   - Nombre del producto
   - Nombre del vendedor
   - Imagen
   - Precio
   
   Los productos simples contienen los campos adicionales:
   - Inventario
   
   Los productos rentables contienen los campos adicionales:
   - Tipo de renta (por noche, o por hora)
   - Disponibilidad segun la fecha
   
   Los espacios contienen los campos adicionales:
   - Ubicación del espacio
   - Disponibilidad segun la fecha

Requerimientos funcionales:
1. La vista del producto debe de desplegar la información que contiene el producto según su tipo.
2. Se debe de poder consultar el inventario o la disponibilidad del producto según su tipo.
3. Puntos extra: El producto tipo espacio debe de desplegar su ubicación en un mapa utilizando un API de
   Google Maps.

Requerimientos no funcionales:
1. La conexión con el back-end debe de ser con GraphQL.
2. La arquitectura debe de utilizar ReactJS.

## Un diagrama de arquitectura del sistema.

![Diagrama de arquitectura](https://i.imgur.com/8Q4Z7Zm.png)

## Un detalle de los data model y estructuras de datos utilizadas, si es que aplican.


## Ejemplos de las consultas que se van a hacer al back-end utilizando GraphQL.

## Una explicación de las decisiones tomadas.

Para un proyecto que será tan grande y escalable como una compañía como la de ustedes 
es probable que usen Monorepo y atomic design,pero evite agregar complejidad innecesaria
challenge.

Para un caso real usaría, Next, Remix o Vite para el desarrollo de la aplicación,
pero como el proyecto es pequeño y no se requiere de un diseño tan complejo,
decidí usar Create React App para agilizar el proceso de desarrollo. Solo me pareció
importante en este caso usar al menos typescript para tener un mejor manejo de los
tipos de datos y evitar errores.

Generalmente para un proyecto desde 0 y grande para una gran compañía usaría 
tailwinds, ya que prefería crear el sistema de diseño de la compañía y tailwinds 
es una gran opción para crear componentes reutilizables y que sean fáciles de 
mantener, pero como el proyecto es pequeño y no se requiere de un diseño tan complejo,
decidí usar Material-UI para agilizar el proceso de desarrollo.

No usé librerías para el manejo de estados, ya que el proyecto es pequeño y no
se requiere de un manejo de estados tan complejo, pero si fuera un proyecto grande
usaría Redux Toolkit.

Para el manejo de rutas usé react-router-dom, ya que es una librería muy popular y robusta.

Para el manejo de peticiones graphql usé Apollo Client, ya que es una librería muy popular y robusta.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
