const express = require('express');

const router = express.Router();


router.get('/login', (req, res, next) => {
   
    res.sendFile('/Users/ingaw/OneDrive/Desktop/Node/router/submit.html')
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit" formaction="/submit.html">Add</button></form>')
    
});

router.post('/product',(req, res, next)=>{
    console.log(req.body)
    res.redirect('/add')
})

module.exports = router;