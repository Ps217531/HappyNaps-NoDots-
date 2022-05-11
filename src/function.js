//https://stackoverflow.com/questions/48138979/how-to-change-text-every-5-seconds
var texts = new Array();
texts.push("Gratis verzending boven de 90,-");
texts.push("Betaal in 3 termijnen");
texts.push("Binnen 24 uur verstuurd");

change = document.getElementById("change");

var point = 0;
console.log(texts);


function changeText() {

    $("h5").html(texts[point]);
    if (point < texts.length - 1) {
        point++;

    } else {
        point = 0;
    }
    change = texts;
    setTimeout(changeText, 5000);

}

changeText();