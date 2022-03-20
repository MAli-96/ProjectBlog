import express from "express";
import router from "./routes/blogPosts.js";
import mongoose from "mongoose";
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/blogpost');

app.set('View engine', 'ejs');

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    const blogpost = [
        {
            title: "Test Post",
            createdAt: new Date(),
            description: "Test Description"
    },
    {
            title: "Test Post 2",
            createdAt: new Date(),
            description: "Test Description 2"
        },
];
    res.render('../views/entries/index.ejs', { blogpost: blogpost });
});

app.get('/entries/new', (req, res) => {
    const blogpost = [
        {
            title: "Test Post",
            createdAt: new Date(),
            description: "Test Description"
    },
    {
            title: "Test Post 2",
            createdAt: new Date(),
            description: "Test Description 2"
        },
];
    res.render('../views/entries/new.ejs', { blogpost: blogpost });
});

app.use('/blogposts', router);

const port = process.env.PORT || 3000;
app.listen(port, () => (console.log(`listening on port ${port}...`)));