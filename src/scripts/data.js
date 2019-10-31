import entriesOnDom from "./entriesDOM.js"

//This should contain two fetch calls only.
const API = {
    getJournalEntries() {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
            .then(parsedEntries => {
                console.log(parsedEntries)
                parsedEntries.forEach(entry => {
                    entriesOnDom.renderJournalEntry(entry)
                })
            })
    },

    saveJournalEntry(entryObject) {
    return fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObject)
    })
        .then(response => response.json())
        .then(this.getJournalEntries())
        // .then
        // .then(parsedEntries => {
        //     parsedEntries.forEach(entry => {
                // entriesOnDom.renderJournalEntry(entry)
  
            // })
        }
    // // }
} 
        //Make another request to entries to pull new JSON file down again.
        //Currently not saving. Nothing in my API storage. 
        //THEN you probs want to parse it? 
        //THEN you want to call the function that makes the object? To make the journal object with the factory function and sent it to the ether?
        //OR should I call this function earlier, and store it in an array, and then call the array here to send it to the ether?



export default API

// const searchHandler = () => {
//     debugger
//     const parkSearchInput = document.querySelector("option")
//     console.log("user input from dropdown", parkSearchInput.value);
//     //parkSearch is the function that fetches the data.
//     parkSearch(parkSearchInput.value)
//       .then(response => {
//         console.log(response.parks)
//         searchInput.value = ""
//       })
//   };