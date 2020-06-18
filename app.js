const mongoose = require('mongoose');
const express = require("express");
const app = express();
const mongoUri = require('./config/secrets').mongoURI;
const bodyParser = require('body-parser');
// for heroku
const path = require('path');

// const router = express.Router();
// const multer = require("multer");
// const AWS = require('aws-sdk');
// const storage = multer.memoryStorage();
// const upload = multer({storage: storage})
// const EVENT = require("./models/Event")

// router.post('/upload', upload.single('file'), function(req, res){
//   const file = req.file;
//   const s3FileURL = process.env.AWS_Uploaded_File_URL_LINK;
  
//   let s3bucket = new AWS.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION
//   });

//   const params = {
//     Bucket: process.env.AWS_BUCKET_NAME,
//     Key: file.originalname,
//     Body: file.buffer,
//     ContentType: file.mimetype,
//     ACL: "public-read"
//   };

  // s3bucket.upload(params, function(err, data){

  //   if(err){
  //       res.status(500).json({
  //         error: true,
  //         Message: err
  //       })  
  //     } else {

  //       res.send({data});
        
  //       const newFileUploaded = {
  //         description: req.body.description,
  //         fileLink: s3FileURL + file.originalname
  //       };

  //       const event = new EVENT(newFileUploaded);       
  //       event.save(function(error, newFile){ ///?????????????
  //         if(error){
  //           throw error;
  //         }
  //       })
  //     }
  //   }
  // });
// });





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

const events = require("./routes/api/events")
app.use("/api/events", events);

const dinings = require("./routes/api/dinings");
app.use("/api/dinings", dinings);

// require Pasport
const passport = require('passport');
const router = require('./routes/api/users');

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

// You can now delete our 'Hello World' route
// app.get("/", (req, res) => res.send("Hello World"));
app.use(passport.initialize());
require('./config/passport')(passport);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));