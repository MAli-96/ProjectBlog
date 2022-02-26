import express from "express";
import router from "./routes/blogPosts.js";
const app = express();
app.use(express.json());

app.set('View engine', 'ejs');

app.use('/blogposts', router);

app.get('/', (req, res) => {
    const blogpost = [{
        title: "Test Post",
        createdAt: Date.now(),
        description: "test description"
    }];
    res.render('./index.ejs', { blogpost: blogpost });
});

const port = process.env.PORT || 3000;
app.listen(port, () => (console.log(`listening on port ${port}...`)));