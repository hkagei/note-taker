const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('this is the homepage');
    // res.sendFile(path.join(__dirname, '../../public/index.html'));
    res.send('Hello World');
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;