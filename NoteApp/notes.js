const fs = require('fs');
var addNote = (title, body) => {
    var notes = [];
    const note = {
        title,
        body
    };
    try {
        const noteString = fs.readFileSync('notes.json');
        notes = JSON.parse(noteString);
    } catch (e) {
        console.log(e);
    }
    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes.json', JSON.stringify(notes));
    }

};

var getAll = () => {
    console.log('Getting All Nodes');
};
var getNote = (title) => {
    console.log('Getting Note: ', title);
};

var removeNote = (title) => {
    console.log('Removing Note: ', title);
};


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};