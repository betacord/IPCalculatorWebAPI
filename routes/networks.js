let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    if (!req.query.ip || !req.query.mask) {
        res.json({
            err: 'Provide all required params'
        });
    }

    res.json({
       network: req.query.ip,
       broadcast: req.query.mask,
       count: '10'
    });
});

module.exports = router;