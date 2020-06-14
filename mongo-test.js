const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dev:UXh5kReX9QZ7r63k@cluster0.4dlx0.mongodb.net/db?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log(collection);
  client.close();
});
