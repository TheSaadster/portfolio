var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-contents")
function opentab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link")
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabName).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu");

function closeMenu() {
    sidemenu.style.right = "-200px";
}
function openMenu() {
    sidemenu.style.right = "0px";
}