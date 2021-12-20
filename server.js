// https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// dotenv loads environment variables from a .env file into process.env.
//  This makes development simpler. Instead of setting environment 
//  variables on our development machine, they can be stored in a file
//  . We’ll create the .env file later.
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//not required now in new version of express
// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use(cors());
// use this instead
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const postsRoute = require('./routes/posts');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/posts',postsRoute);

app.get("/",(req,res)=>{
  res.send("Hello World Heroku");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
