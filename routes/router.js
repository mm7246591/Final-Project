const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/:where/:type', (req, res) => {
    console.log(req.originalUrl)
    res.render(`${req.params.where}/${req.params.type}`);
})

router.get('/answer', (req, res) => {
    res.render('answer');
});

router.get('/member', (req, res) => {
    res.render('member');
});

router.get('/test', (req, res) => {
    res.render('test');
});

router.get('/about', (req, res) => {
    res.render('about');
});



module.exports = router;