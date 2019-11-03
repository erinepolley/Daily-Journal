import journalSenderToApi from "./journalSenderToApi.js"
import entriesOnDom from "./entriesDOM.js"
import API from "./data.js"

const journalEntries = document.querySelector("#journal-entries")
const deleteButtonListener = {
registerDeleteListener () {
    journalEntries.addEventListener("click", event => {
        if(event.target.id.startsWith("deleteRecipe--")) {
            const entryToDelete = event.target.id.split("--")[1]

        API.deleteJournalEntry(entryToDelete)
            .then(API.getJournalEntries)
            .then(entriesOnDom.renderJournalEntry)
        }
    })
}

}

export default deleteButtonListener
