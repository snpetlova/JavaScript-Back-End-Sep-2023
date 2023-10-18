const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const {PORT} = require('./constants');
const routes = require('./router');

//Express Configurations
app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.urlencoded({ extended: false }));

//Handlebars Configuration
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views'); 

//Routes
app.get('/', (req, res) => {
    //res.send('Hiiii')
    res.render('home');
});

app.use(routes);

app.listen(PORT, ()=> console.log(`Server is listening on port: ${PORT}`));