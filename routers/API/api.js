var express = require('express');
var router = express.Router();

// Base endpoint
router.get('/', function(req, res) {
    res.json({
        "success": 1,
        "data": {
            "message": "Web server is online!"
        }
    })
});

module.exports = router;
