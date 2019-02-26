// je vais chercher le driver sqlite3 dans node_modules
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
//fs= field system
const dbFile = 'test.db';
const db = new sqlite3.Database(dbFile);
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

// sans db.serialize.
// les operations sont lancées en même temps.
// le INSERT risque d'etre executé.
// avant que la creation de la table soit finie.
db.serialize(() => {
    // .serialize pour lire de façon synchrone, une ligne par une ligne
    if (!fs.existsSync(dbFile)) {
        db.run('CREATE TABLE products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price INTEGER, like BOOLEAN)');
    }

    //on rempli ici en bas notre Base de Données
    db.run('INSERT INTO products (name, price, like) VALUES (?, ?, ?)', 'sac', 39, true);
    db.run('INSERT INTO products (name, price, like) VALUES (?, ?, ?)', 'shirt', 15, false);
    db.run('INSERT INTO products (name, price, like) VALUES (?, ?, ?)', 'chaussures', 59, false);

    db.all('SELECT like FROM products WHERE like = false', function (error, data) {
        if (!error) console.log(data);
        else console.log(error);
    });


});

app.get('/', function (request, response) {
    db.all("SELECT * FROM products", function (error, data) {
        response.send('data');

    });
});

app.get('/planet', function (request, response) {
    response.send('Hello planet');
});

app.listen(3000, function (error) {
    if (!error) console.log('app listening port 3000');
})