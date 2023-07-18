/** 
 * This code is a basic Express.js server that connects 
 * to a MongoDB database and provides API endpoints for 
 * creating, fetching, updating, and deleting blog posts.
 */


// importing the required dependencies express and mongoose 
const express = require('express');
const mongoose = require('mongoose');

const app = express(); // creating an instance of the Express application
const port = 3000; // Port number for hosting

app.use(express.json()); // The express.json() middleware is used to parse JSON data in the request body.

app.get('/', (req, res) => {
    // route handler is defined for the root URL ("/") that sends the index.html file.
    res.sendFile(__dirname + '/index.html');
});

// MongoDB connection URI is defined
const dbURI = 'mongodb+srv://akremmuktar:J9K4kWVLf6kNKEKz@cluster0.heirxbv.mongodb.net/?retryWrites=true&w=majority'; // Replace with your own MongoDB connection URI

// establishing a connection to the MongoDB database
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err);
    });

// A schema for the blog post model is defined using the mongoose.Schema class
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
    title: String,
    content: String,
    author: String,
    date: { type: Date, default: Date.now },
});

// The blog post model is created using mongoose.model() and the defined schema.
const BlogPost = mongoose.model('BlogPost', blogPostSchema);


// Create a new blog post
app.post('/posts', (req, res) => {
    const { title, content, author } = req.body;
    const newPost = new BlogPost({ title, content, author });

    newPost.save()
        .then((post) => {
            res.json(post);
        })
        .catch((err) => {
            res.status(500).json({ error: 'Failed to create the blog post' });
        });
});

// Fetch all blog posts
app.get('/posts', (req, res) => {
    BlogPost.find()
        .then((posts) => {
            res.json(posts);
        })
        .catch((err) => {
            res.status(500).json({ error: 'Failed to fetch blog posts' });
        });
});

// Update a blog post
app.put('/posts/:id', (req, res) => {
    const postId = req.params.id;
    const { title, content, author } = req.body;

    BlogPost.findByIdAndUpdate(postId, { title, content, author }, { new: true })
        .then((updatedPost) => {
            res.json(updatedPost);
        })
        .catch((err) => {
            res.status(500).json({ error: 'Failed to update the blog post' });
        });
});

// Delete a blog post
app.delete('/posts/:id', (req, res) => {
    const postId = req.params.id;

    BlogPost.findByIdAndDelete(postId)
        .then(() => {
            res.json({ message: 'Blog post deleted successfully' });
        })
        .catch((err) => {
            res.status(500).json({ error: 'Failed to delete the blog post' });
        });
});


// The server listens on the specified port and logs a message when it starts.
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
