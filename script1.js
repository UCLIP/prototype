document.getElementById("perimeter").onclick = function () {
    location.href = "Perimeter/index.html";
};
document.getElementById("IA").onclick = function () {
    location.href = "IA/index.html";
};
document.getElementById("consequences").onclick = function () {
    location.href = "consequences/index.html";
};
document.getElementById("futur").onclick = function () {
    location.href = "futur/index.html";
};

setTimeout(couleur, 4000);
function couleur()
{
    color=prompt("entrez la couleur que vous voulez en anglais pour le site ");
    document.body.style.backgroundColor =color;
}
let date=Date();
document.write("votre date de connection est : "+ date);







