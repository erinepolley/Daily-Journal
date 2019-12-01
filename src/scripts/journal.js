import API from "./data.js"
import journalSenderToApi from "./journalSenderToApi.js"
import entriesOnDom from "./entriesDOM.js"
import buttonListener from "./eventListeners.js"
import entryObjectFactoryFunction from "./entryObjectFactoryFunction.js"

// import eventListener from "./eventListener.js"
//RESPONSIBILITY: INITIAL VIEW

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

*/

// Invoke the render function, and the argument is the array of objects in the data.js file. 

API.getJournalEntries()
    // takeThingFromJsonAndRenderOnDom();
    .then(parsedEntries => {
        parsedEntries.forEach(entry => {
            entriesOnDom.renderJournalEntry(entry)

        })
    })


//at some point this will be the factory function?


buttonListener.registerDeleteListener()
buttonListener.submitEventListener()
buttonListener.radioButtonEventListener()
buttonListener.searchEventListener()
// const dropdownValues = document.querySelector("option")
// console.log(dropdownValues.value)


// const dropdownValuesToRadioButtons = (dropdownStuff) => {
//     return `
// <input type="radio" id="radio-${dropdownStuff}" name="radio" value="radio-${dropdownStuff}">
// <label for="radio-${dropdownValues}">${dropdownStuff}</label>  
// `}

// const renderRadioButtonToDom = () => {
//  const divForRadioButtons = document.querySelector("#radio-buttons")
//  console.log(divForRadioButtons)
//  divForRadioButtons.innerHTML = dropdownValuesToRadioButtons("Confident")
// }

// renderRadioButtonToDom()
//This method 
 // })
//SUPPOSED TO BE IN EVENTS.JS AND JUST INVOKED HERE.

