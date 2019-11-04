function generalFunction() {

    var dayMenu = document.getElementById("dayInput");
    var selDate = dayMenu.options[dayMenu.selectedIndex].text;
    var monthMenu = document.getElementById("monthInput");
    var selMonth = monthMenu.options[monthMenu.selectedIndex].text;
    var yearMenu = document.getElementById("yearInput");
    var selYear = yearMenu.options[yearMenu.selectedIndex].text;

    console.log("User picked the date: " +selDate, "" +selMonth, "" +selYear, ".");

    if (selYear<=2000) {
        console.log("User is over 18 ((auto)).");
        //window.location.replace("xxtraoily.html");
    } else if (selMonth === "December") {
        console.log("Calculating...");
            if (selDate>=5 && selYear===2001) {
                console.log("User is over 18 ((manual)).");
                //window.location.replace("xxtraoily.html");
            } else {
                console.log("User is under 18 ((manual)).");
            }
    } else if (selYear>2001) {
        console.log("User is under 18 ((manual)).");
    } else {
        console.log("User is over 18 ((manual)).");
    }
;
    return;
};