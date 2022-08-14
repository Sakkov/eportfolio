

function goto(destination) {
    location.href =(destination)
}

function home() {
    goto("./")
}

function navBar(y) {
    y.classList.toggle("change");
    const x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}