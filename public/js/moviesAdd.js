$h1 = $("h1");
$section = $("section");
$article = $("article")

$h1.innerText = "AGREGAR PELICULAS";
$h1.classList.add("titulo");
$article.classList.add("fondoTransparente");
$section.classList.add("fondoCRUD")

function $(elem) {
    return document.querySelector(elem)
};