const express      = require('express');
const cookieParser = require('cookie-parser');
const app          = express(); 

const PORT         = 3000;

app.use(cookieParser());
app.get('/', (req, res) =>{
    res.cookie("username", "Davit Davitiani");
    res.cookie("cart", {items : [1,2,3]})
    res.cookie("forever", 1, {expire: Date.now() + 600000})

    res.send("Hello");
})

app.get('/', (req, res) => {
    res.write(`username - ${req.cookies.username} <h1>`);
    res.write(`forever - ${req.cookie.forever} <h1>`);
    res.end();
})

