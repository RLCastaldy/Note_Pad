//initialie frameworks
const router = require('express').Router();
const fs = require('fs');
const uuid = require('uuid');
const jsonData = fs.readFileSync('./db/db.json', 'utf8');
const existingNotes = JSON.parse(jsonData);

//get request for existing notes
router.get('/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (error, data) => {
    // error ? console.error(error) : console.log(data)
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
    fs.readFile('./db/db.json', 'utf8', (error, data) => {
      // error ? console.error(error) : console.log(data)
      if(error) {
          console.log(error);
      }
      else {
        //   return res.json(JSON.parse(data))
      }
    })
    const { title, text } = req.body;

    if(req.body) {
    const newNote = {
        title,
        text,
        id: uuid.v4()
        }
    
    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);

    console.log(newNote);
    }
  });

//export router variable
module.exports = router;