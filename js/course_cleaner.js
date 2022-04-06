// Imports and uses clean_navbar (see public/clean_navbar.js)
const src = chrome.runtime.getURL("public/clean_navbar.js");
import(src).then(( imported ) => {
    imported.default()
})
