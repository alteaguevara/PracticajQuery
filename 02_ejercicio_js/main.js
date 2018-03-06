/* Para que cambie la imagen al pasar el ratón por encima */

$("#imagen1").hover(function () {
        /* En la función interna se cambia el atributo del css a visible del otro objeto*/
        $("#mensaje_img1").css("visibility", "visible");
    },
    function () {
        $("#mensaje_img1").css("visibility", "hidden")
    });