// const http = require(`http`);

// http.createServer(function (req, res) {
//     res.write('Hello World');
//     res.end();
// }).listen(8080);

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!!')


})
app.listen(3000)




