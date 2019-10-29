
/*
    Purpose: To render all journal entries to the DOM
    Arguments: entries (array of objects)
    Looping through each object in the array with .forEach. Rendering the HTML with contents of object, then storing it in journalInnerHtml.
*/

let journalInnerHtml = ""
const renderJournalEntry = (journalEntryObj) => {
    //console.log("JOURNAL ENTRIES", journalEntryObj)
     journalInnerHtml += makeJournalEntryComponent(journalEntryObj)
    const journalEntriesOnDom = document.querySelector("#journal-entries")
    journalEntriesOnDom.innerHTML = journalInnerHtml
}