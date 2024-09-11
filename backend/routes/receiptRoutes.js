const express = require('express');
const router = express.Router();
const receiptController = require('../controllers/receiptController');

router.post('/create', receiptController.createReceipt);

module.exports = router