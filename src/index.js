require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
var cors = require('cors')



//Set environment variables
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;


//Middleware
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({}));
app.use(cors())

//Routes
app.use('/api', require('./routes/Router'));



app.listen(PORT, () => console.log(`Corriendo en puerto ${PORT} en modo ${NODE_ENV}`));







