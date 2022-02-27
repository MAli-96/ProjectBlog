import express from "express";
const router = express.Router();

router.get('../newEntry', (req, res) => {
    res.render(".views/entries/newEntry");
});

export default router