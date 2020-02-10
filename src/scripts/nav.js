var error=false;

$(function(){
  $("#header").load("./headerPartial.html"); 
  //$(".formBook input").value="";
});

var main = function() {
   
    $(".formBook button").on("click", function(event){
    
      // I use an object I avoid set an if for each 
      // inputs,  on error controls
      var data = {
        "title" : $("#title"),
        "author" : $("#author"),
        "editorial": $("#editorial"),
        "isbn": $("#isbn"),
        "available": $("#available")
      }
    
      // checking if all data set on inputs forms
      // Object.keys(data).forEach(function(key) 
      //   {checkField(data[key]);});
      
      if (!error) composeLines(data)
      

    })

    $(".formBook input").on("keypress", function(event){
      
      // set color on inputs if it has an error
      if(error) {
        $(event.currentTarget).css("background-color", "white")
        $(".errors").empty(); 
      }
    })
}

var composeLines = function(data) {
  var linesOfBooks = `<span> ${data['title'][0].value} </span>`
  linesOfBooks += `<span> ${data['author'][0].value} </span>`
  linesOfBooks += `<span> ${data['editorial'][0].value} </span>`
  linesOfBooks += `<span> ${data['isbn'][0].value} </span>`
  linesOfBooks += `<span> ${data['available'][0].value} </span>`

  $("#detail").append(linesOfBooks);    
}
// function for check if inputs are void
var checkField = function ($control){
    var $errorMassage = "Debe rellenar campo"
    //console.log($control[0].value)
    if($control[0].value==="") {
      error = true;
      errors($errorMassage, $control);
    } else error = false;
    
    return error
}

// function show errors on div
var errors = function($textError, $control) {
  $(".errors").empty(); 
  var $errors = $(".errors"); 

  $(".errors").append($textError); 
  $($control[0]).css("background-color", "pink")
  
}

$(document).ready(main);

/*
var addData = function() {

  "use strict";

  var data= [];

  var form = document.getElementById('formBook');
  var college = form.elements.titulo.value;
  var autor = form.elements.autor.value;
  var editorial = form.elements.editorial.value;
  var isbn = form.elements.isbn.value;
  
  var divDetail = document.getElementById('detail');

  var node = '<span>'+ college + '</span>';

  divDetail.innerHTML += node;
}
*/