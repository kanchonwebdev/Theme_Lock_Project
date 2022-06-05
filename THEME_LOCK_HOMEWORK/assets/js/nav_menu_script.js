const toggle = document.getElementById("toggle");
const menu = document.getElementById("nav-overlay");

toggle.onclick = function () {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
}