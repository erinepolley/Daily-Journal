const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
            .then(parsedEntries => {
                parsedEntries.forEach(entry => {
                    renderJournalEntries(entry)
                })
            })
        }
    }