
import entryObjectFactoryFunction from "./entryObjectFactoryFunction.js"
import API from "./data.js"
// import entriesOnDom from "./entriesDOM.js"

const journalSenderToApi = {

    sendJournalEntryToApi() {
        const date = document.querySelector("#date").value
        const title = document.querySelector("#title").value
        const contents = document.querySelector("#contents").value
        const mood = document.querySelector("option").value

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
            console.log(entryObjectBox)
            API.saveJournalEntry(entryObjectBox)
                .then(API.getJournalEntries)
        }
    }
}

export default journalSenderToApi