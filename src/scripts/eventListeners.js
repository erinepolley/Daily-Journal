import journalSenderToApi from "./journalSenderToApi.js"
import entriesOnDom from "./entriesDOM.js"
import API from "./data.js"
import entryObjectFactoryFunction from "./entryObjectFactoryFunction.js"

const journalEntries = document.querySelector("#journal-entries")
const submitButtonEventListener = document.querySelector("#submit-button")
const radioButtons = document.getElementsByName("radio")


const buttonListener = {
    //This method is the event listener that listens for delete/edit
    registerDeleteListener() {
        journalEntries.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteEntry--")) {
                const entryToDelete = event.target.id.split("--")[1]
                console.log(entryToDelete)
                // entriesOnDom.clearDOMWithEmptyString()
                API.deleteJournalEntry(entryToDelete)
                    // .then(entriesOnDom.clearDOMWithEmptyString)
                    .then(API.getJournalEntries)
                    .then(parsedEntries => {
                        parsedEntries.forEach(entry => {
                            entriesOnDom.renderJournalEntry(entry)
                            location.reload(true)
                        })
                    })
            } else if (event.target.id.startsWith("editEntry--")) {
                const entryIdToEdit = event.target.id.split("--")[1]
                console.log("ENTRY TO EDIT", entryIdToEdit)
                journalSenderToApi.populateFormFields(entryIdToEdit)
            }
        })
    },

    submitEventListener() {
        submitButtonEventListener.addEventListener("click", () => {
            const hiddenFieldId = document.getElementById("formId")
            //If there ISN'T a value, you want to SAVE (POST)
            //If there IS a value, you want to EDIT(PUT)
            if (hiddenFieldId.value !== "") {
                let dateInput = document.querySelector("#date")
                let titleInput = document.querySelector("#title")
                let contentsInput = document.querySelector("#contents")
                let moodInput = document.querySelector("#mood")
                //Making a new object of the edited information  with this factory function 
                let editedFactoryFunction = entryObjectFactoryFunction.newJournalEntry(dateInput.value, titleInput.value, contentsInput.value, moodInput.value)
                console.log("EDITED FACTORY FUNCTION", editedFactoryFunction)
                console.log(hiddenFieldId.value)
                //And sending it to the API to update the old info
                API.editJournalEntry(hiddenFieldId.value, editedFactoryFunction)
                    .then(() => {
                        document.querySelector("#formId").value = ""
                        entriesOnDom.journalInnerHtml = ""
                        contentsInput.value = ""
                        // console.log("AM I COMING IN CLEAR?")
                        // console.log("TITLE INPUT VALUE", titleInput.value)
                        titleInput.value = ""
                        dateInput.value = ""
                        moodInput.value = ""
                    })
                    .then(() => API.getJournalEntries())
                    // takeThingFromJsonAndRenderOnDom();
                    .then(parsedEntries => {
                        parsedEntries.forEach(entry => {
                            entriesOnDom.renderJournalEntry(entry)
                        })
                    })
            } else {
                // console.log("HIDDEN FIELD ID VALUE", hiddenFieldId.value)
                journalSenderToApi.sendJournalEntryToApi()
            }
        })
    },

    radioButtonEventListener() {
        console.log("RADIO", radioButtons)
        radioButtons.forEach(button => {
            button.addEventListener("click", event => {

                // entriesOnDom.clearDOMWithEmptyString()
                let mood = event.target.value
                console.log("MOOD", mood)
                // let entryBox = document.querySelector("#journal-entries")
                // entryBox.innerHTML = ""
                entriesOnDom.journalInnerHtml = ""
                API.getJournalEntries()
                    .then(parsedEntries => {
                        console.log("PARSED ENTRIES", parsedEntries)
                        console.log("MOOD AFTER ENTRIES RENDERED", mood)
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
        })
    },
    //For this, I'd like to match what the user searches for with anything in the input fields in the entry objects.
    //First, I need to grab the value of what the user enters. 
    //Then, I need to grab the journal entries.
    //Then, I need to compare the values of the objects with the value of the search.
    //I could do this by a. iterating over each object, doing object.value for each, and then b) iterate over that array of returned values, comparing the search value to each value in the object. Then c) conditional: if something matches, then take that whole object and render it to the DOM.   
    searchEventListener() {
        const searchBox = document.querySelector("#search")
        console.log("SEARCH BOX", searchBox)
        searchBox.addEventListener("keypress", () => {
            if (event.charCode === 13) {
                const searchValue = event.target.value
                console.log(searchValue)
                API.getJournalEntries()
                    .then(entries => {
                        // const matchingEntries = entries.find(
                        //     entry =>
                        //     Object.values(entry)===searchBox.value
                        // )
                        //     console.log("MATCHING ENTRIES??",matchingEntries)
                        entries.forEach(entry => {
                            const entryValues = Object.values(entry)
                            console.log(entryValues)
                            for (let i = 0; i < entryValues.length; i++) {
                                if (searchValue === entryValues[i]) {
                                    entriesOnDom.journalInnerHtml = ""
                                    entriesOnDom.renderJournalEntry(entry)
                                // } else {
                                //     alert("No entries match.")
                                // }
                            }
                        }
                    })
                    
                // const matchingEntries = 
                // const entries = document.querySelector("#journal-entries")
                // console.log("WHAT IS JOURNAL ENTRIES",entries)
            })
        }
    })
}
}



export default buttonListener
