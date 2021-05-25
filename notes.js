const fs = require('fs');

const fileName = "notes.json";

const addNote = (argv) => {
  const notes = loadNote();

  if(notes.find(n => n.title === argv.title)) {
    console.log('note title already in use');
    return;
  }

  notes.push({
    title: argv.title,
    body: argv.body,
  });
  saveNote(notes);
  console.log('note added');
}

const removeNote = (argv) => {
  const notes = loadNote();
  const noteIndex = notes.findIndex(n => n.title === argv.title);
  if (noteIndex >= 0) {
    notes.notes = notes.slice(0, noteIndex).concat(notes.slice(noteIndex + 1));
    saveNote(notes);
    console.log('note deleted');
    return;
  }
  console.log('no note to delete');
}

const listNotes = () => {
  const notes = loadNote();
  notes.forEach(n => {
    console.log(n.title);
  });
}

const readNote = (argv) => {
  const notes = loadNote();
  const note = notes.find(n => n.title === argv.title);
  if (note) {
    console.log(note.title);
    console.log(note.body);
    return;
  }
  console.log('cannot find the requested note');
}

/********************************
 * Helpers                      *
 ********************************/
function loadNote() {
  try{
    const buffer = fs.readFileSync(fileName);
    return JSON.parse(buffer.toString());
  } catch(e) {
    return [];
  }
}

function saveNote(note) {
  fs.writeFileSync(fileName, JSON.stringify(note));
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
