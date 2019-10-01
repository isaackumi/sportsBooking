const express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    res.send('Hello, THis one works too');
});


module.exports=router;