export default function clean_navbar() {
    // Make unitn header not sticky, to clean up the interface
    document.getElementById("headerUniTN").style.position = "static"

    // Make the navbar smaller and fixed to the top of the page (not sticky), preserving the logo
    document.querySelector(".navbar").setAttribute('style', 'background-color:#C01532 !important')
    document.querySelector(".navbar").style.minHeight = "50px";
    document.querySelector(".navbar").classList.remove("fixed-top");

    // Remove the space left on the top of the page
    document.getElementById("page").style.marginTop = "0";
}