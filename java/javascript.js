function generalFunction() {
    var yearMenu = document.getElementById("yearInput");
    var selYear = yearMenu.options[yearMenu.selectedIndex].text;
    console.log(selYear);
    return;
};