const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config')

const postsRoute = require('./routes/posts');

app.use(bodyParser.json());
app.use('/posts', postsRoute)

app.get('/', (req, res) => {
    res.send('Homepage');
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('connected to mongoDB');
})

app.listen(3000);