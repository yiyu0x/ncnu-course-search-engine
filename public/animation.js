window.onload = function() {
    nav = document.getElementById("nav");
    con = document.getElementById("container");
    nav.style.opacity = 0.0;
    con.style.opacity = 0.0;
    showbar()
    showcontent()
}

function showbar() {
    o1 = parseFloat(nav.style.opacity);
    o1 += 0.02;
    nav.style.opacity = o1;
    if (o1 < 1) {
        window.setTimeout("showbar()", 5);
    }
}

function showcontent() {
    o2 = parseFloat(con.style.opacity);
    o2 += 0.02;
    con.style.opacity = o2;
    if (o2 < 1) {
        window.setTimeout("showcontent()", 20);
    }
}