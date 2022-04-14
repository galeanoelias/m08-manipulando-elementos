
const $main = $("main");
const $subtitulo = $(".subtitulo");
const $a = $("a");
const $body = $("body");
const $p = document.querySelectorAll("p");
const $prompt = prompt("Ingrese su nombre");

if(!$prompt) {
    $subtitulo.innerText += "Invitado";
} else {
    $subtitulo.innerText += $prompt;
};

$subtitulo.style.textTransform = "uppercase";
$a.style.color = "#E51B3E";
let background = confirm("¿Desea colocar un fondo de pantalla?");
if(background) {
    $body.classList.add("fondo")
}

$p.forEach((elem, i) => {
    if(i / 2 === 0 || i / 2 === 1) {
        elem.classList.add("destacadoPar")
    } else {
        elem.classList.add("destacadoImpar")
    }
})
$main.style.display = "block"

function $ (elem) {
    return document.querySelector(elem)
};
