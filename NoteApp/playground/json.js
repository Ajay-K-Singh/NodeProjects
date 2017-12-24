// const obj = {
//     name: 'jay',
//     key: 'yay'
// };
// const stringObj = JSON.stringify(obj);
// const personString = '{"name": "ajay","age": "25"}';
// const personObj = JSON.parse(personString);
// console.log(stringObj, personObj);

const fs = require('fs');

const newNote = {
    title: 'Padhayi',
    body: 'padh le'
};
const newNoteString = JSON.stringify(newNote);
fs.writeFileSync('notes.json', newNoteString);

const noteString = fs.readFileSync('notes.json');
const noteObj = JSON.parse(noteString);

console.log(noteObj.title);