const mongoose = require('mongoose');
const express = require("express");
const app = express();
const mongoUri = require('./config/secrets').mongoURI;
const bodyParser = require('body-parser');
// for heroku
const path = require('path');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
  }
// middleware for the body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// from user routes
const users = require("./routes/api/users");
app.use("/api/users", users);
// require Pasport
const passport = require('passport');

mongoose
  .connect(mongoUri, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// You can now delete our 'Hello World' route
// app.get("/", (req, res) => res.send("Hello World"));
app.use(passport.initialize());
require('./config/passport')(passport);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));