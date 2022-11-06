const express = require('express');

const router = express.Router();

const items = require('./item');

router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to API 🚀',
    });
});

router.use('/item', items);

module.exports = router;