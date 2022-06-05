window.onscroll = function () {
    let actual_height = screenY;
    let scroll_height = scrollY;

    if (scroll_height > actual_height) {
        document.getElementById("scroll-top").classList.add("active");
    } else {
        document.getElementById("scroll-top").classList.remove("active");
    }
}

