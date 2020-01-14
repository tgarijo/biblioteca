#Aplicaciones y Servicios Web

##Caso Practico unidad I

La biblioteca de la Universidad Isabel I, quiere implementar un sistema para la gestión de los préstamos de libros. Este sistema estará formado por un cliente web y una parte servidora y será capaz de visualizar todos los préstamos realizados y libros disponibles. Más adelante deberá también soportar la funcionalidad de no sólo visualizar, sino también de prestar los libros. El vicerrectorado del área, nos ha pedido una primera entrega en la que solo vamos a desarrollar el código HTML simple. Aunque puedes aumentar la dificultad como lo desees, dicho sistema contará como mínimo con las siguientes vistas.  Listado de libros, donde se mostrarán diferente información de los libros (título, autores, editorial, ISBN, ejemplares disponibles…)  Libro, se añadirá toda la información disponible del libro (título, imagen de portada, resumen, editorial, ISBN, autores …)  Listado de préstamos, se listaran todos los préstamos realizados con su información (título, persona que ha prestado, fecha de préstamo, fecha de devolución, estado del préstamo…)


##Entorno de desarrollo.
Se utiliza Visual Studio Code por su fácil manejo y la gran cantidad de utilidades y plugin que dispone para desarrollar en distintos lenguajes.

Como forma de preservar el codigo,  evitar pérdidas de información, capacidad de colaboración y control de versiones se utilizara el software “git” en la nube, siendo el sitio github. 

Podríamos optar por otros repositorios online como gitlab que además de servicios como el que ofrece github nos permite despliegue continuo del software a desarrollar.

##Arquitectura de desarrollo del software
Se optara por una arquitectura Model-View-Controller, utilizando el patrón MVC para este fin.  
La implementación de testing en las diferentes capas de la aplicación sería de vital importancia, para evitar errores, además de que facilita el despliegue continuo de la aplicación, pero no sabemos si el proyecto tiene necesidad de esta práctica o si entra en el ámbito del ejercicio.



#Parte FrontEnd o Vistas de usuario

La aplicación como dice el enunciado de requisitos,  estará compuesta por vistas al usuario compuestas por listados y formularios de entrada de datos para su posterior serialización en una base de datos.
En principio según la complejidad estará íntegramente diseñada en html y css. Si la complejidad aumenta podría plantearse diseñas la parte frontEnd hacia un modelo de componentes utilizando framework como React o librerías como Vue

##Diseño Html
El diseño estará basado en la información que da la asignatura de “Aplicaciones y Servicios Web” y fuentes externas. Se diseñará basado en el standard HTML 5.

##Diseño CSS
El diseño de hojas de estilo estará basado en CSS BootStrap. Este framework es un conjunto de librerías y estilos que nos facilitara el diseño de las pantallas de usuarios o vistas con el objetivo de formalizar un estilo visual en todas las vistas y la interacción con el usuario

##Estructura.
Todo el proyecto partirá de la carpeta src.
Dentro de ella habrá una carpeta view y otra javascript




Fuentes
https://getbootstrap.com/

