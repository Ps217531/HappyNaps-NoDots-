//blog.stackfindover.com/how-to-change-text-every-3-seconds/var texts = new Array();

function changeText() {

    var header = ["Gratis verzending boven de 90,-", "Betaal in 3 termijnen", "Binnen 24 uur verstuurd!"],
        i = 0;
    setInterval(function() {
        $('#change').fadeOut(function() {
            $(this).html(header[(i = (i + 1) % header.length)]).fadeIn();
        });
    }, 5000)
}
changeText();