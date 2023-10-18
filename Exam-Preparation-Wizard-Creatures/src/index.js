const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');

const { PORT, DB_URL } = require("./constants");
const routes = require("./router");

//Express Configurations
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Handlebars Configuration
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

//Database Connection
async function dbConnect() {
  await mongoose.connect(DB_URL);
}

dbConnect()
  .then(() =>{
    console.log(`Successfully connected to the database!`);
  })
  .catch((err) =>
    console.log(`Error while connecting to the database... Error: ${err}`)
  );

//Routes
app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
