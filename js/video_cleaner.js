// Imports and uses clean_navbar (see public/clean_navbar.js)
const src = chrome.runtime.getURL("public/clean_navbar.js");
import(src).then(( imported ) => {
    imported.default()
})

// Make the video player always big, using all the space he can on the screen
document.getElementById("region-main").style.width = "100%";
document.getElementById("vinapse-embed").style.minHeight = "85vh" // Max height as a workaround of the script controlling height

// Restore smartphone-like style to the rest of the page,
// espanding the blocks on the side of the player
document.querySelector("[data-region=\"blocks-column\"]").style.width = "100%"