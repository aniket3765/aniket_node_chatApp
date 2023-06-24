const express = require('express');

const router = express.Router();

router.use('/add', (req,res,next) => {
    res.sendFile('/Users/ingaw/OneDrive/Desktop/Node/router/message.html')
});

module.exports = router;