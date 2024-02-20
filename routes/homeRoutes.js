//initialize frameworks
const path = require('path');
const router = require('express').Router();


//get index.html page
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

//get notes.html page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

//export router
module.exports=router