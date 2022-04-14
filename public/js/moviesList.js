$body = $("body");
$h1 = $("h1");

let modeDisplay = confirm("¿Desea modo oscuro?")

if(modeDisplay) {
    $body.style.backgroundColor = "#7f7f7f";
};
$h1.innerText = "LISTADO DE PELÍCULAS";
$h1.style.color = "white";
$h1.style.backgroundColor = "teal";
$h1.style.padding = "20px"

function $ (elem) {
    return document.querySelector(elem)
};