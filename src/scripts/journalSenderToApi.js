
import entryObjectFactoryFunction from "./entryObjectFactoryFunction.js"
import API from "./data.js"
import entriesOnDom from "./entriesDOM.js"
// import entriesOnDom from "./entriesDOM.js"

const journalSenderToApi = {
//This function sends the new journal entry to JSON server.
    sendJournalEntryToApi() {
        //console.log("HI THERE")
        const date = document.querySelector("#date").value
        const title = document.querySelector("#title").value
        const contents = document.querySelector("#contents").value
        const mood = document.querySelector("#mood").value
        //console.log(date)
        //console.log("MOOD WHEN ENTRY IS FIRST SUBMITTED", mood)
        //alert for calendar fires upon loading, not upon clicking submit button.
        if (date === "") {
            return alert("Please enter a date.")
        } else if (title === "") {
            return alert("Please enter a title.")
        } else if (contents === "") {
            return alert("Please enter a journal entry.")
        } else if (mood === "") {
            return alert("Please select a mood.")
        } else {
            let entryObjectBox = entryObjectFactoryFunction.newJournalEntry(date, title, contents, mood)
            console.log("ENTRY FROM FACTORY FUNCTION", entryObjectBox)
            // entriesOnDom.clearDOMWithEmptyString()
            API.saveJournalEntry(entryObjectBox)
                .then(API.getJournalEntries)
                .then(parsedEntries => {
                    parsedEntries.forEach(entry => {
                        entriesOnDom.renderJournalEntry(entry)

                    })
                })

        }
    },

    //When the user clicks the edit button on any rendered journal entry
    populateFormFields(entryToEdit) {
        scroll(0,0)
        let hiddenInputId = document.querySelector("#formId")
        let dateInput = document.querySelector("#date")
        let titleInput = document.querySelector("#title")
        let contentsInput = document.querySelector("#contents")
        let moodInput = document.querySelector("#mood")
        // let moodInput = document.querySelectorAll("option")
        console.log("MOOD IMPUT", moodInput)
        API.getEntryToEdit(entryToEdit)
            .then(returnedEntry => {
                console.log("RETURNED ENTRY", returnedEntry)
                hiddenInputId.value = returnedEntry.id
                dateInput.value = returnedEntry.date
                titleInput.value = returnedEntry.title
                contentsInput.value = returnedEntry.contents
                moodInput.value = returnedEntry.mood
                console.log("MOOD INPUT VALUE", moodInput.value)
                // entryObjectFactoryFunction.newJournalEntry()

        })
        

    }
}

export default journalSenderToApi