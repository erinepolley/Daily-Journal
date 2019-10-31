import API from "./data.js"
import entriesOnDom from "./entriesDOM.js"
import eventListener from "./eventListeners.js"
// import eventListener from "./eventListener.js"
//RESPONSIBILITY: INITIAL VIEW

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.

    objectWithGetterMethod.methodToGetData().then(functionThatRendersData)
*/


// Invoke the render function, and the argument is the array of objects in the data.js file. 

API.getJournalEntries()
//FROM DATA.JS
// .then(parsedEntries => {
//     parsedEntries.forEach(entry => {
//         entriesOnDom.renderJournalEntry(entry)
//     })
// })
//at some point this will be the factory function?


const submitButtonEventListener = document.querySelector("#submit-button")
console.log(submitButtonEventListener)
submitButtonEventListener.addEventListener("click", () => eventListener.sendJournalEntryToApi())



//Grab the boxes
//Grab the info from the boxes
//quality control on info
//put them in a factory function
//send them to the server