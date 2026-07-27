window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1500);
});

const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", function () {
    alert("Welcome to Roshni ❤️ Saurabh Wedding");
});
