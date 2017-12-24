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
    } else console.log('Note is duplicate');
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    const result = notes.removeNote(argv.title);
    const removeNoteMsg = result ? 'Note was removed' : 'Note was not found.';
    console.log(removeNoteMsg);
} else {
    console.log('Command not recognized');
}