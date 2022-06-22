const fs = require('fs');
const path = require("path");
const router = require('express').Router();
const notes = require('../Develop/db/db.json');
const { v4: uuidv4 } = require('uuid');


router.get('/notes', (req, res) => {
    res.json(notes);
    
});

router.post('/notes', (req, res) => {
    let newNote = req.body;
    newNote.id = uuidv4();
        notes.push(newNote);
    fs.writeFile(path.resolve(__dirname, "../db/db.json"), JSON.stringify(notes), function(error){
        if (error) {
                console.error(error);
                res.status(500).send("An error occurred, please try again");
                }
                else {
                    res.json(newNote)
                }
    })
})

router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    
    notes.splice(req.params.id, 1);
    res.json(noteId);
})

module.exports = router;