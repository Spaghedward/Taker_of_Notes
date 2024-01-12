const notesRouter = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


notesRouter.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data);
        res.json(notes)
    

})});

notesRouter.post('/', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data);
        notes.push(newNote);
        fs.writeFileSync('db/db.json', JSON.stringify(notes));
        res.json(notes);
    });

    
});

// notesRouter.delete('/:id', (req, res) => {
//     fs.readFile('./db/db.json', 'utf8', (err, data) => {
//         if (err) throw err;
//         let notes = JSON.parse(data);
        
// })})

module.exports = notesRouter;