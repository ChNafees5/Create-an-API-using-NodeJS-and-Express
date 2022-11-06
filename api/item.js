const express = require('express');

const router = express.Router();

const items =  [{
    id:'1',
    name:'ali'
},
{
    id:'2',
    name:'hassan'
}]

router.get('/', (req, res) => {
    res.json({
       items
    });
});


module.exports = router;