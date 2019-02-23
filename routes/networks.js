let express = require('express');
let networkingHelper = require('../helpers/networking');

let router = express.Router();

router.get('/', (req, res, next) => {
    if (!req.query.ip || !req.query.mask) {
        res.json({
            err: 'Provide all required params'
        });
    }

    networkingHelper.getAllData(req.query.ip, req.query.mask, (result) => {
        res.json(result);
    });
});

module.exports = router;