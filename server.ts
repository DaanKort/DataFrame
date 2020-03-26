import express = require('express');
import mongoose =  require('mongoose');
import bodyParser = require('body-parser');
import { db_prod_URL } from './config/keys';
import * as  http from 'http'

const router = require('./routes/api/items');

const app = express();

app.use(bodyParser.json());

mongoose.connect(db_prod_URL)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.use('/api/items', router);

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);
server.listen(PORT)
server.on('listening', () => {
    console.info(`server running at http://localhost:${ PORT }` );
})