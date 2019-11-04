import API from "./data.js"
import journalSenderToApi from "./journalSenderToApi.js"
import entriesOnDom from "./entriesDOM.js"
import buttonListener from "./eventListeners.js"
// import eventListener from "./eventListener.js"
//RESPONSIBILITY: INITIAL VIEW

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.

*/

// const takeThingFromJsonAndRenderOnDom = () =>{
//   return .then(parsedEntries => {
//         parsedEntries.forEach(entry => {
//             entriesOnDom.renderJournalEntry(entry)
//         })
//     })
// }
// Invoke the render function, and the argument is the array of objects in the data.js file. 

API.getJournalEntries()
    // takeThingFromJsonAndRenderOnDom();
    .then(parsedEntries => {
        parsedEntries.forEach(entry => {
            entriesOnDom.renderJournalEntry(entry)

        })
    })


//at some point this will be the factory function?
const submitButtonEventListener = document.querySelector("#submit-button")
console.log(submitButtonEventListener)
submitButtonEventListener.addEventListener("click", () => journalSenderToApi.sendJournalEntryToApi())

buttonListener.registerDeleteListener()

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

const radioButtons = document.getElementsByName("radio")
console.log("RADIO", radioButtons)
radioButtons.forEach(button => {
    button.addEventListener("click", event => {

        // entriesOnDom.clearDOMWithEmptyString()
        let mood = event.target.value
        console.log("MOOD", mood)
        let entryBox = document.querySelector("#journal-entries")
        entryBox.innerHTML = ""
        API.getJournalEntries()
            .then(parsedEntries => {
                console.log("PARSED ENTRIES", parsedEntries)
                let arrayThatMatchesMood = parsedEntries.filter(entry =>
                    mood === entry.mood)
                console.log("FILTEREDARRAY", arrayThatMatchesMood)
                // entriesOnDOM[journalInnerHtml].innerHTML = ""

                // let entryBox = document.querySelector("#journal-entries") 
                // console.log("ENTRY BOX", entryBox)
                // entryBox.innerHTML = ""
                //    console.log("EMPTY ENTRY BOX", entryBox)
                arrayThatMatchesMood.forEach(objInArray => {
                    entriesOnDom.renderJournalEntry(objInArray)
                    console.log("NEW ARRAY", arrayThatMatchesMood)
                })
            })
    })
}) // })
//SUPPOSED TO BE IN EVENTS.JS AND JUST INVOKED HERE.

