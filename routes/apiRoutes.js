const router = require('express').Router();
const fs = require('fs');
const uuid = require('uuid');

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

    const newNote = {
        title,
        text,
        id: uuid.v4()
        }
  });


module.exports = router;