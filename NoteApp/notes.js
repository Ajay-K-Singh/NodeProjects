var addNote = (title, body) => {
    console.log('Adding Note', title, body);
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