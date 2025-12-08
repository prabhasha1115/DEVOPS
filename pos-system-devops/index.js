const express = require ('express');
const bodyParser = require ('body-parser');
require('dotenv').config({ path: 'env', quiet: true });
require ('dotenv').config();
const mongoose = require ('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const UserRoute = require('./routes/UserRouter');
const CustomerRoute = require('./routes/CustomerRouter');
const ProductRoute = require('./routes/ProductRouter');
const OrderRoute = require('./routes/OrderRouter');

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
});

app.use('/api/V1/users', UserRoute); // http://localhost:3000/api/V1/users/signup
app.use('/api/V1/customers', CustomerRoute);
app.use('/api/V1/products', ProductRoute);
app.use('/api/V1/orders', OrderRoute);
