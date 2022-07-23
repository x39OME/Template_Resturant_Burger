// Scroll To Top
let btn = document.querySelector(".scroll-to-top");

window.onscroll = function () {
    if (window.scrollY >= 600) { 
        btn.style.display = "block"; 
    } else {
        btn.style.display = "none"; 
    }
};
btn.onclick = function () {
window.scrollTo({ 
    left: 0,
    top: 0,
    behavior: "smooth",
});
};