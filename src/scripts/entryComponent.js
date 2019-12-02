//build a function that returns an HTML representation of a journal entry data structure and render it to the DOM. 

const entryComponentToHtml = {
    makeJournalEntryComponent: journalEntry => {
        // Create your own HTML structure for a journal entry
        return `
    <section class="entry--${journalEntry.id}">
    <h2>${journalEntry.title}</h2>
    <p><em>${journalEntry.date}</em></p>
    <p>${journalEntry.contents}</p>
    <p>${journalEntry.mood}</p>
    <button type="button" id="editEntry--${journalEntry.id}" class="btn btn-info">EDIT</button>
    <button type="button" id="deleteEntry--${journalEntry.id}" class="btn btn-info">DELETE</button>
    </section>
    <hr>
    `
    }
}
export default entryComponentToHtml
