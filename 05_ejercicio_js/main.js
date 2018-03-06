/* Para que cambie la imagen al pasar el ratón por encima */

$(document).ready(function () {
    $("#carrete").hide();
    $("h1").show();
});

$("h1").on("click", function () {
    $("#carrete").show();
    $("h1").hide();
});

$("img").hover(function () {
    $(this).attr("width", "300px");
},
function () {
    $(this).attr("width", "250px");
});