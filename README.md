# Documentación y explicación:

## Un diagrama de arquitectura del sistema.

La arquitectura constaría de tres partes

- Base de datos - Para la implementación funcional no usé ninguna ya que no era
requerida para esta prueba, solo use un array con datos de prueba
- Backend (API) - Es la carpeta mock_api, donde se encuentra el servidor de graphql
- Frontend (App) - Es la carpeta client, donde se encuentra la aplicación de react

## Un detalle de los data model y estructuras de datos utilizadas, si es que aplican.
Para los types e interfaces de graphql están en mock_api/server.ts
Para las interfaces usadas en el frontend están en 

## Ejemplos de las consultas que se van a hacer al back-end utilizando GraphQL.
- Está en el archivo client/graphql/queries/get-products.ts

## Una explicación de las decisiones tomadas.

Para un proyecto que será tan grande y escalable como una compañía como la de ustedes 
es probable que usen Monorepo y atomic design,pero evite agregar complejidad innecesaria
a este código de prueba.

Para un caso real usaría, Next, Remix o Vite para el desarrollo de la aplicación,
pero como el proyecto es pequeño y no se requiere de un diseño tan complejo,
decidí usar Create React App para agilizar el proceso de desarrollo. Solo me pareció
importante en este caso usar al menos typescript para tener un mejor manejo de los
tipos de datos y evitar errores.

Generalmente para un proyecto desde 0 y grande para una gran compañía usaría 
tailwinds, ya que prefería crear el sistema de diseño de la compañía y tailwinds 
es una gran opción para crear componentes reutilizables y que sean fáciles de 
mantener. Para este proyecto de ejemplo use tailwinds, sin embargo, no me centré en 
la creación de los componentes reusables del sistema de diseño.

No usé librerías para el manejo de estados, ya que el proyecto es pequeño y no
se requiere de un manejo de estados tan complejo, pero si fuera un proyecto grande
usaría Redux Toolkit.

Para la creación del server graphql usé Apollo Server y para el manejo de peticiones
graphql usé Apollo Client, ya que son librerías muy populares y robustas.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Para correr el server de prueba en la carpeta mock_api ejecute:

### `npm start`

Para correr la web en el la carpeta client ejecute:

### `npm start`

