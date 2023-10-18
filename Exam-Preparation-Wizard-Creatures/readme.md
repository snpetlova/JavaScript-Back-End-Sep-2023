1. Init structure and project
    -npm i -y
    -npm i express
    -npm i nodemon -D
    - in package.json: change test with "start": "nodemon src/index.js"
    -add src to main: "main": "src/index.js"

2.Setup developer enviroment
 2.1.index.js file (require express, endpoint, port listen);
 2.2.constants.js - PORT
 2.3.configure bodyparser - app.use(express.urlencoded({ extended: false }));
 2.4.configure static middleware 
 2.5.configure routes - route.js

3.Add resources - img and css in public, html files in views

4.Install handlebars - npm i express-handlebars
 4.1.configure view engine - const handlebars = require('express-handlebars');
 4.2.add main layout - render (put home page in directory layouts and make it hbs)
 4.3.fix hyperlink styles - change hrefs
 4.4.render home page in hbs (home should be only with main, I should also have main file with header and footer and {{{body}}})

5.Convert all views to hbs and leave it only in mains
 5.1.organize views in folders

6.Add controller folder with home controller
