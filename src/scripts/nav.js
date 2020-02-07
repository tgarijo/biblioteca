/*const navMenu = document.getElementById("navMenu")
const logo = `<img src="../img/logo.png">`
const navString = 
` 
  <img src="../img/logo.png">
  <nav>
    <a class="link" href="./home.html" title="Home">Home</a>
    <a class="link" href="./books.html" title="Libros">Libros</a>
    <a class="link" href="./listBook.html" title="Listado Libros">Listado Libros</a>
    <a class="link" href="./listOfBorrowed.html" title="Listado Libros Presados">Listado Libros Presados</a>
    <a class="link" href="./soporte.html" title="Soporte">Soporte</a>
    <a class="link" href="#" title="Salir">Salir</a>
  </nav>
 `
//navMenu.innerHTML = logo;
navMenu.innerHTML = navString;
*/


/*
var link = document.querySelector('link[rel="import"]');
console.log(link);

var template = link.import.querySelector('#fragment');
var clone = document.importNode(template.content, true);

document.querySelector('#header').appendChild(clone);

*/

$(function(){
  $("#header").load("./headerPartial.html"); 
});
