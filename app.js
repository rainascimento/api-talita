const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const postsRoute = require('./routes/posts');


//Middlewares
app.use(bodyParser.json());
app.use('/posts', postsRoute);


// Acessando o banco de dados

mongoose.connect('mongodb+srv://raiteste:testemongo@raitestes-f1h82.mongodb.net/acoes?retryWrites=true&w=majority',
{ useNewUrlParser: true },() => {
    return console.log('conectado no banco');
});


// Aqui é a porta que defini para escutar o servidor
app.listen(3000);

