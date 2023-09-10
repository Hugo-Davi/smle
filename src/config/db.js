const mongoose = require('mongoose');

const mongodb_url = process.env.MONGODB_URL;
async function main(){

    try {
        await mongoose.connect(mongodb_url);
        console.log('MongoDB conectado com sucesso!');
    } catch (error) {
        console.log(`Error: ${error}`);
    }

}

module.exports = main;