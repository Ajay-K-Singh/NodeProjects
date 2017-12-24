const fs = require('fs');
//const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const argv = yargs.argv;
var command = process.argv[2];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note has been added');
        notes.logNote(note);
    } else console.log('Note is duplicate');
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(allNotes);
    allNotes.forEach(note => {
        notes.logNote(note);
    });
} else if (command === 'read') {
    const findNote = notes.getNote(argv.title);
    if (findNote) {
        console.log('The note found is: ', findNote);
        notes.logNote(findNote);
    } else console.log('Note not found');
} else if (command === 'remove') {
    const result = notes.removeNote(argv.title);
    const removeNoteMsg = result ? 'Note was removed' : 'Note was not found.';
    console.log(removeNoteMsg);
} else {
    console.log('Command not recognized');
}