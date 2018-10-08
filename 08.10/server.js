const express = require('express');
const path    = require('path');
const app     = express();

const PORT = 3000;

app.set('views', './src/views')
app.set('view engine', 'pug');
app.use( express.static( path.join(__dirname, '/public') )  );


app.get('/',(req, res) => {
    res.render('index', {title: "Demo Title"});
})




app.listen(PORT, () => {
    console.log(`server PORT ${PORT}`);
})