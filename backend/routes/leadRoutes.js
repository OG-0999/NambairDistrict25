const express = require('express');
const router = express.Router();
const { createLead } = require('../controllers/leadController');

router.post('/leads', createLead);

module.exports = router;
