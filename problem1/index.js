//importing modules
const express = require('express');
const app = express();
const axios = require('axios');

let valid_urls = ['http://localhost:8090/primes', 'http://localhost:8090/rand', 'http://localhost:8090/fibo', 'http://localhost:8090/odd']
//making a get request
let urls = [];
var ans;
app.get('/numbers', (req, res) => {
    urls = req.query.url;
    res.send(urls);
});


//providing port numbers 5000 -> default and other when used in production
const PORT = process.env.PORT || 5000;
//listening on the said port
app.listen(PORT, () => console.log(`listening on port ${PORT}`));