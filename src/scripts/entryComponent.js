//build a function that returns an HTML representation of a journal entry data structure and render it to the DOM. 

const entryComponentToHtml = {
    makeJournalEntryComponent: journalEntry => {
        // Create your own HTML structure for a journal entry
        return `
    <h2>${journalEntry.title}</h2>
    <p><em>${journalEntry.date}</em></p>
    <p>${journalEntry.contents}</p>
    <p>${journalEntry.mood}</p>
    <hr>
    `
    }
}
export default entryComponentToHtml