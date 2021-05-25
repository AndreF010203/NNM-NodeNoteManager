const notes = require('./notes.js');
const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describer: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describer: 'Note body',
      demandOption: true,
      type: 'string',
    }
  },
  handler: notes.addNote
});

yargs.command({
  command: 'remove',
  describe: 'Remove an existing note',
  builder: {
    title: {
      describer: 'Note title',
      demandOption: true,
      type: 'string',
    }
  },
  handler: notes.removeNote
});

yargs.command({
  command: 'read',
  describe: 'Display a note',
  builder: {
    title: {
      describer: 'Note title',
      demandOption: true,
      type: 'string',
    }
  },
  handler: notes.readNote
});

yargs.command({
  command: 'list',
  describe: 'List all the notes',
  handler: notes.listNotes
});

yargs.parse();