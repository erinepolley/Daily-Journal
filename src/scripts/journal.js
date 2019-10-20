//Function to push each of the three individual journal entries to the array called myJournalEntries.
const journalEntriesPushToArray = (journalEntry) => {
    myJournalEntries.push(journalEntry)
}
//Invoking above function for each of the entries.
journalEntriesPushToArray(journalEntry1)
journalEntriesPushToArray(journalEntry2)
journalEntriesPushToArray(journalEntry3)
console.log(myJournalEntries)


// Invoke the render function, and the argument is the array of objects in the data.js file. 

renderJournalEntries(myJournalEntries)
