

export default {
    newJournalEntry (dateParam, titleParam, contentsParam, moodParam) {
    return {
        date: dateParam,
        title: titleParam,
        contents: contentsParam,
        mood: moodParam
    }

}
}