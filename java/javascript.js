function generalFunction() {

    var dayMenu = document.getElementById("dayInput");
    var selDate = dayMenu.options[dayMenu.selectedIndex].text;
    var monthMenu = document.getElementById("monthInput");
    var selMonth = monthMenu.options[monthMenu.selectedIndex].text;
    var yearMenu = document.getElementById("yearInput");
    var selYear = yearMenu.options[yearMenu.selectedIndex].text;

    console.log("User picked the date: " +selDate, "" +selYear, ".");

    if (selYear<=2000) {
        console.log("Sure");
        window.location.replace("xxtraoily.html");
    }; 
    return;
};