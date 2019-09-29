const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "/public")));

app.use(express.json());

const bitcoin_network_router = require('./routes/bitcoin_network_router');
app.use('/bitcoin_network', bitcoin_network_router);

app.listen(3000, function() {
    console.log("3000 server ready...");
});

