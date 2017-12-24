const fs = require('fs');


const fetchNotes = () => {
    try {
        const noteString = fs.readFileSync('notes.json');
        notes = JSON.parse(noteString);
    } catch (e) {
        return [];
    }
    return notes;
};
const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
};
var addNote = (title, body) => {
    var notes = fetchNotes();
    const note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};

var getAll = () => {
    return fetchNotes();
};
var getNote = (title) => {
    var notes = fetchNotes();
    var foundArrayNotes = notes.filter((note) => note.title === title);
    return foundArrayNotes;
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var newNotesArray = notes.filter((note) => note.title != title);
    saveNotes(newNotesArray);
    return notes.length !== newNotesArray.length;
};

var logNote = (note) => {
    console.log('Title: ', note.title);
    console.log('Body: ', note.body);
};


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote,
    getAll
};