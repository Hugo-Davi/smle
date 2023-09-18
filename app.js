const express = require('express');
const app = express();

// Load enviroment file
require('dotenv').config();

const port = process.env.PORT || 3000;

// to extract the data from the request body
app.use(express.json());

// Routes
const routes = require('./src/routes/api.routes');
app.use('/api', routes);


// Database connection
const connect = require('./src/config/db');
connect();

app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`);
});