$allP = document.querySelectorAll("p");
$section = $("section");

$allP.forEach(element => {
    element.style.fontStyle = "italic";
});

$section.style.backgroundColor = "grey";
$section.style.padding = "20px";
$section.style.display = "flex";
$section.style.justifyContent = "space-around";

function $(elem) {
    return document.querySelector(elem);
};