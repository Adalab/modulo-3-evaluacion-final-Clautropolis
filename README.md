# Evaluación final - Módulo 3

## Proyecto de Clautrópolis
Este proyecto se ha realizado para la evaluación del módulo 3 de Adalab, en el que se trabaja con React. El objetivo era construir una aplicación que recogiera datos de una API, pintara el listado, permitiera filtrar personajes de Harry Potter y ver el detalle de cada uno de los personajes.

## Características

* La API que se ha utilizado para llevar a cabo el ejercicio ha sido [hp-api](https://hp-api.onrender.com/api/characters/house/gryffindor). Esta API proporciona información sobre los personajes de Harry Potter basados en la casa de Howarts a la que pertenecen. Al recoger la información hemos limpiado los datos para quedarnos con los que nos resultaban realmente útiles.

* Filtrado de personajes por casa, género y nombre. La aplicación permite filtrar los personajes mediante tres filtros. Por nombre, en el que se ha utilizado un input, por casa, para el que se ha utilizado un select, y por género, que se ha llevado a cabo con un radio. Según se actualizan estos filtros, los personajes van cambiando en función de si coinciden con la búsqueda o no.

* Vista de detalles de cada personaje. Todos los personajes son clicables, y una vez clicas en ellos, se modifica la información que se muestra en la ventana y aparece la información al completo del personaje, en la que se incluye su especie, si está vivo o muerto, sus nombres alternativos en caso de que los tenga, etc. 

* Botón de Volver. En la pantalla del detalle del personaje tenemos un botón de volver que nos lleva de vuelta a la página del listado de personajes. Al volver, la página mantiene la búsqueda que se había realizado previamente. 

* Botón de reset. El formulario cuenta también con un botón para resetearlo. Al clicarlo, todos los campos del formulario se resetean con los valores iniciales definidos por la aplicación.

* Imágenes de relleno. Para los personajes que no tenían imagen se ha utilizado una página de imágenes de relleno para completarlo.



## Tecnologías utilizadas

* React: La librería principal para el desarrollo del proyecto ha sido React. Se ha trabajado con componentes, transmitiendo información entre ellos mediante props y lifting.

* Sass: Para el estilo de la aplicación hemos usado sass, igualmente estructurado en componentes.

* React Router: Para gestionar la navegación entre distintas vistas dentro de la aplicación. En este caso hemos creado dos **Route**, una para la vista del listado de personajes y otra para el detalle.

* Jest y Testing Library: Para realizar pruebas unitarias y garantizar la estabilidad del código. Se ha instalado y se ha desarrollado un pequeño test, pero no se ha podido llegar a ejecutar completamente por falta de instalación de dependencias. Seguimos trabajando en ello para poder implementarlo a la mayor brevedad.

## Instalación

Pasos para poder ejecutar y ver el proyecto:
1. Clona el repositorio con **git clone https://github.com/Adalab/modulo-3-evaluacion-final-Clautropolis.git**
2. Accede a la carpeta del proyecto **cd modulo-3-evaluacion-final-Clautropolis**
3. Instala las dependencias **npm install**
4. Inicialo en tu navegador **npm run dev** y se abrirá en una dirección del tipo **http://localhost:3000**.
