function toggle(btnid, textid) {
    var button = document.getElementById(btnid);
    var x = document.getElementById(textid);
    if (x.style.display != "none") {
        x.style.display = "none";
        button.textContent = 'Click to show >>';
    } else {
        x.style.display = "";
        button.textContent = 'Click to hide <<';
    }
} 