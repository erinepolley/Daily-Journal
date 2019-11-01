
import entryComponentToHtml from "./entryComponent.js"

/*
    Purpose: To render all journal entries to the DOM
    Arguments: entries (array of objects)
    Looping through each object in the array with .forEach. Rendering the HTML with contents of object, then storing it in journalInnerHtml.
*/



const entriesOnDom = {
    journalInnerHtml: "",
    renderJournalEntry (journalEntryObj) {
        //console.log("JOURNAL ENTRIES", journalEntryObj)
        // console.log(this.journalInnerHtml)
        this.journalInnerHtml += entryComponentToHtml.makeJournalEntryComponent(journalEntryObj)
        const journalEntriesOnDom = document.querySelector("#journal-entries")
        journalEntriesOnDom.innerHTML = this.journalInnerHtml
    }
}

// const takeThingFromJsonAndRenderOnDom = () =>{
//     .then(parsedEntries => {
//         parsedEntries.forEach(entry => {
//             entriesOnDom.renderJournalEntry(entry)
//         })
//     })
// }
export default entriesOnDom