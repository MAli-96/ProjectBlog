import express from "express";
const router = express.Router();
import Blog from './../models/blogs.js';

router.get('/new', (req, res) => {
    res.render("entries/new");
});

router.get('/:id', (req, res) => {

});

router.post('/', async (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    });
try {
    blog = await blog.save()
    res.redirect(`/blogpost/${blogpost.id}`)
} catch (e) {
    res.render('/new/entries', { blogpost: blogpost })
}
});

export default router