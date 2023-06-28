const express = require('express');

const router = express.Router();

router.use('/add', (req,res,next) => {
    res.sendFile('/Users/ingaw/OneDrive/Desktop/Node/router/message.html')
});
router.use('/msg', (req,res,next) => {
    
    fs.appendFile("new.txt",` ${req.body.user}:${req.body.msg}` ,function (err) {
        if (err) throw err;
        console.log('Saved!1');
      })
      fs.readFile('new.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data)
        res.send(`${data}<form id="btn" action="/msg" method="post"><input type="hidden" name="user" id="user"><input type="text" name ="msg" id ="msg"><button type="submit">click</button>  </form><script> document.getElementById('user').value=localStorage.getItem('username')</script>`) });

      
})
module.exports = router;
