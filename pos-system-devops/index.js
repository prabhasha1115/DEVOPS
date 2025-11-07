const express = require ('express');
const bodyParser = require ('body-parser');
require ('dotenv').config();
const mongoose = require ('mongoose');

const app = express();

app.use(bodyParser.urlencoded);
app.use(bodyParser.json());

const PORT = process.env.SERVER_PORT || 3000 ;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://prabhasharodrigo98_db_user:k9nwqxa4cAagwaPt@cluster0.mfhoo47.mongodb.net/pos_system_devops?appName=Cluster0';

mongoose.connect(MONGO_URI).then(() =>{
    console.log('Mongo db connected...');

    app.listen(PORT,() =>{
        console.log(`Server Started and Running on port ${PORT}`)
    })
}).catch((error) =>console.error('DB Error :',error));

app.get('/test', (req,resp) =>{
    return resp.json({'message':'Server Stated..'});
})