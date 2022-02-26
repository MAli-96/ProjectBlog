import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Accessed blog-posts');
})

export default router