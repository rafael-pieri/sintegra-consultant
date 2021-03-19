const express = require('express');
const sintegraController = require('../controller/sintegra.controller');

const router = express.Router();

router.route('/sintegra/companies/:companyId/receipts').get(sintegraController.getReceipt);

module.exports = router;