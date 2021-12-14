const express = require('express');
const router = express.Router();

router.get('/answer', (req, res) => {
    res.render('answer');
});


module.exports = router;