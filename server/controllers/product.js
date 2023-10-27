const express = require('express');
const router = express.Router();
//look at his
router.get('/', (res, req) => {
    res.setEncoding([
        {id: 1, new: "Product 1"},
        {id: 2, new: "Product 2"},
    ]);
})
.get('/search', (req, res, next))
module.exports = router;