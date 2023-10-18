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

7.Add database
 7.1.install mongoose
 7.2.connect to db in constants:  DB_URL: 'mongodb://127.0.0.1:27017/wizard-creatures' and in index.js Database Connections

8.Authentication
 8.1.user controller
 8.2.add controller to routes
 8.3.fix navigations in nav bar (login, register, logout)
 8.4.render login page
 8.5.render register page

9.Add user model
 9.1.simple validation in Schema
 9.2.add method for register
 9.3.create first user record in the db
 9.4.validate password missmatch
 9.5.validate email already exists

10.Hash password
 10.1.install bcrypt
 10.2.hash password

11.Login
 11.1.find user by email
 11.2.validate password with hash

12.Generate jsonwebtoken
 12.1.install jsonwebtoken
 12.2.promisify jsonwebtoken
 12.3.generate secret
 12.4.generate token in service login   

13.Return token in cookie
 13.1.install cookie-parser
 13.2.configure cookie-parser
 13.3.set cookie with the token

14.Implement logout

15.Authentication middleware
 15.1.create middleware directory
 15.2.add auth middleware and import it in express configuration below cookieParser
 15.3.decode the token
 15.4.handle invalid token

16.Dynamic navigation
 16.1.conditional options in nav
 16.2.res.locals

17.Error handling
 17.1.add 404 page
 17.2.redirect missing route to 404
 17.3.add global error handled (option)
 17.4.add error message util

18.Show error notification in main layout