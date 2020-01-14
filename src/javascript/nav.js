const navMenu = document.getElementById("navMenu")
const navString = 
` <nav>
    <a class="link" href="./home.htm" title="Home">Home</a>
    <a class="link" href="./listBook.htm" title="Listado Libros">Listado Libros</a>
    <a class="link" href="./listOfBorrowed.htm" title="Listado Libros Presados">Listado Libros Presados</a>
    <a class="link" href="./soporte.htm" title="Soporte">Soporte</a>
    <a class="link" href="#" title="Salir">Salir</a>
  </nav>
 `

navMenu.innerHTML = navString;

