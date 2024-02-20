//initialie frameworks
const router = require('express').Router();
const fs = require('fs');
const uuid = require('uuid');
const jsonData = fs.readFileSync('./db/db.json', 'utf8');
let existingNotes = require('../db/db.json')


//get request for existing notes
router.get('/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (error, data) => {
    if(error) {
        console.log(error);
    }
    else {
        return res.json(JSON.parse(data))
    }
  })
});

//post request for notes
router.post('/notes', (req, res) => {

  const { title, text } = req.body;

  if(req.body) {
    const newNote = {
        title,
        text,
        id: uuid.v4()
        }

    // Add new note to existing notes
    existingNotes.push(newNote)

    // Take this updated array of notes and write them to your db.json file 
    fs.writeFile('./db/db.json', JSON.stringify(existingNotes), (err) => console.log(err))

    // Update the client with the new note 
    res.json(newNote);

    console.log(newNote);
    }
  });


  //   fs.readFile('./db/db.json', 'utf8', (error, data) => {
  //     if(error) {
  //         console.log(error);
  //     }
  //     else {
  //       //   return res.json(JSON.parse(data))
  //     }
  //   })
  //   const { title, text } = req.body;

  //   if(req.body) {
    
    
  //   readAndAppend(newNote, './db/db.json');
  //   res.json(`Note added successfully`);

  //   console.log(newNote);
  //   }
  // });

//export router variable
module.exports = router;

