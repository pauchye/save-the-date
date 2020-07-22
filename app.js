const mongoose = require('mongoose');
const express = require("express");
const app = express();
const mongoUri = require('./config/secrets').mongoURI;
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
  }
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = require("./routes/api/users");
app.use("/api/users", users);

const events = require("./routes/api/events")
app.use("/api/events", events);

const dinings = require("./routes/api/dinings");
app.use("/api/dinings", dinings);

const passport = require('passport');
const router = require('./routes/api/users');

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));