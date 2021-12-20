const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get((req, res) => {
    Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
console.log(req.body)
const username = req.body.username;
const firstname= req.body.firstname;
const  lastname= req.body.lastname;
const  startdate= req.body.startdate;
const  userurl= req.body.userurl;
const  posturl= req.body.posturl;
const postdesc= req.body.postdesc;
// const likes= req.body.likes;
// const comment= req.body.comment;

  const newPost = new Post({username,
    firstname,
    lastname,
    startdate,
    userurl,
    posturl,
    postdesc
});

  newPost.save()
    .then(() => res.json({"message":"success"}))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;