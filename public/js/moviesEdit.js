$allLabel = document.querySelectorAll("label");
$section = $("section");

$allLabel.forEach(element => {
    element.style.fontStyle = "italic";
});

$section.style.backgroundColor = "grey";
$section.style.padding = "20px 100px";
$section.style.width = "40%"
$section.style.display = "flex";
$section.style.justifyContent = "space-around";

function $(elem) {
    return document.querySelector(elem);
};