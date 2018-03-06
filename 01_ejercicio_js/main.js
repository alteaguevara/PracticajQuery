/* Para que cambie la imagen al pasar el ratón por encima */

$("#img1").on("mouseover", function () {
    /* En la función interna se cambia el atributo src del objeto img1*/
    $("#img1").attr("src", "img/rio.jpg")
});

/* Para que cambie la imagen al quitar el ratón */
$("#img1").on("mouseout", function () {
    $("#img1").attr("src", "img/arbol.jpg")
});
