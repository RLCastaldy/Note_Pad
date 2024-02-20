//initilaize frameworks
const express = require('express');

//import routes
const api = require('./routes/apiRoutes.js');
const homeRoutes = require('./routes/homeRoutes.js')

//assign port variable
const PORT = process.env.PORT || 3001;

//set app equal to method call for express
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use('/', homeRoutes);
app.use(express.static('public'));
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);