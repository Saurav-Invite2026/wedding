const envelopeBtn = document.getElementById("envelopeBtn");
const envelopeScreen = document.getElementById("envelopeScreen");

envelopeBtn.addEventListener("click", function () {

    envelopeScreen.style.opacity = "0";
    envelopeScreen.style.pointerEvents = "none";

    setTimeout(function () {
        envelopeScreen.style.display = "none";
    }, 500);

});