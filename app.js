const express = require('express');
const app = express();

// Load enviroment file
require('dotenv').config();

const port = process.env.PORT || 3000;

// to extract the data from the request body
app.use(express.json());

// CORS middleware
const cors = require('cors');
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    app.use(cors());
    next();
})

// Routes
const routes = require('./src/routes/api.routes');
app.use('/api', routes);

// Database connection
const connect = require('./src/config/db');
connect();

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});