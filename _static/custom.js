/* Custom Javascript */

/**
 * Function to open external links in separate tab
 */
document.addEventListener("DOMContentLoaded", function() {
    for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
        var b = c[a];
        if (b.classList.contains("external")) {
            b.target = "_blank";
            b.rel = "noopener";
        }
    }
});