function generalFunction() {

    var yearMenu = document.getElementById("yearInput");
    var selYear = yearMenu.options[yearMenu.selectedIndex].text;
    console.log("User picked the year: " +selYear, ".");

    if (selYear<=2000) {
        console.log("Sure");
        window.location.replace("janaeknight.github.io");
    }
    ; 
    return;
};