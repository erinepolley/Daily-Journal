//Function to push each of the three individual journal entries to the array called myJournalEntries.
const journalEntriesPushToArray = (journalEntry) => {
    myJournalEntries.push(journalEntry)
}
//Invoking above function for each of the entries.
journalEntriesPushToArray(journalEntry1)
journalEntriesPushToArray(journalEntry2)
journalEntriesPushToArray(journalEntry3)
console.log(myJournalEntries)

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
objectWithGetterMethod.methodToGetData().then(functionThatRendersData)

// Invoke the render function, and the argument is the array of objects in the data.js file. 

renderJournalEntries(myJournalEntries)
