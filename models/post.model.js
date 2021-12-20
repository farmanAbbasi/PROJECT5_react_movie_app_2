const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: {type: String,required: true},
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    startdate: { type: String, required: true },
    userurl: { type: String, required: true },
    posturl: { type: String, required: true },
    postdesc: { type: String, required: true },
    likes: { type: Number, "default": 0 },
    comment: { type: Array, "default": [] }
}, {
        timestamps: true,
    });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;


