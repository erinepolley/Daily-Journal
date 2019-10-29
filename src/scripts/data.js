
import entriesOnDom from "./entriesDOM.js"

const API = {
    getJournalEntries() {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
            .then(parsedEntries => {
                parsedEntries.forEach(entry => {
                    entriesOnDom.renderJournalEntry(entry)
                })
            })
    }
}

export default API 