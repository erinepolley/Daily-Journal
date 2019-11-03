import journalSenderToApi from "./journalSenderToApi.js"
import entriesOnDom from "./entriesDOM.js"
import API from "./data.js"

const journalEntries = document.querySelector("#journal-entries")
const deleteButtonListener = {
    registerDeleteListener() {
        journalEntries.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteEntry--")) {
                const entryToDelete = event.target.id.split("--")[1]
                console.log(entryToDelete)
                // entriesOnDom.clearDOMWithEmptyString()
                API.deleteJournalEntry(entryToDelete)
                    .then(entriesOnDom.clearDOMWithEmptyString)
                    .then(API.getJournalEntries)
                    .then(parsedEntries => {
                        parsedEntries.forEach(entry => {
                            entriesOnDom.renderJournalEntry(entry)
                            location.reload(true)
                        })
                    })
            }
        })
    }

}

export default deleteButtonListener
