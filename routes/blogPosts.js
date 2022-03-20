import express from "express";
const router = express.Router();

router.get('/new', (req, res) => {
    res.render("entries/new");
});

router.post('/', (req, res) => {
    
})

export default router