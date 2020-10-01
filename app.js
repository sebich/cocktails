const express = require ('express');

const app = express();

const router = require('./my_modules/router');

app.set('view engine', 'ejs');
// app.set('views', './views');

app.use(express.static('public'));

app.use(router);

const port = 3000;
app.listen(port, () => {
console.log(`Serveur écouté sur le port : ${port}`)
});