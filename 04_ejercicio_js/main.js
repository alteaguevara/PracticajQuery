/* valores iniciales */
$(document).ready(function(){
    $("#anuncio").text("Haz click para cambiar de color").hide().fadeIn(3000);
    $("#anuncio").css("height", "500px");
});

let colores = ["blue","yellow","red","grey","green","orange","purple"];
$("#anuncio").on("click", function () {
    /* Hay que meter Color dentro de la funcion para que se actualice a cada click*/
    let color = colores[Math.floor(Math.random() * colores.length)];
    $("#anuncio").css("background-color", color)
});



