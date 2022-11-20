/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > prevScrollPos) {
        // Scroll down
        document.getElementById("myTopnav").style.top = "-50px";
    } else {
        document.getElementById("myTopnav").style.top = "0";
    }
    prevScrollPos = currentScrollPos;
}
