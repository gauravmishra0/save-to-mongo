var express = require("express");
const bodyParser = require("body-parser");
var app = express();
const port = process.env.PORT || 3001;

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.rukh0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


app.post("/save-details", (req, res) => {
    console.log('req.body', req.body);
    const { firstName, lastName, email } = req.body;
    return client.connect(err => {
        if(err) {
            console.log(`Error: ${err}`);
            return res.send({ err });
        }

        const collection = client.db("test").collection("users");

        return collection.insertOne({ email: email, firstName: firstName, lastName: lastName })
        .then(() => {
            client.close();
            console.log('Here');
            return res.send({ msg: 'Succesfully inserted' });
        })
        .catch((err) => {
            client.close();
            console.log('error', err);
            return res.send({ err });
        });
    });
});
 
app.listen(port, () => {
  console.log("Server listening on port " + port);
});