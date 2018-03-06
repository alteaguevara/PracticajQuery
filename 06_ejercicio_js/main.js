$("#cerrar").on("click", function () {
    $("#banner").remove(); /* desaparece el objeto*/
});

$("img").on("click", function () {
    $(this).replaceWith("<div class='texto'>Añadido al carrito</div>");
    /* cambia la imagen que cliquemos por un texto */
});
