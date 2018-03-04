const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => res.json({success: 'get all'}));
router.post('/create', (req, res) => res.json({success: 'create'}));
router.put('/update', (req, res) => res.json({success: 'update'}));

module.exports = router;