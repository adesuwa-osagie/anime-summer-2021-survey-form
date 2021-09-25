function checkGenre (val) {
    if (val === "other") {
        document.getElementById("genre").style.display = "block";
        console.log("ok");
    } else {
        document.getElementById("genre").style.display = "none";
    }
}

