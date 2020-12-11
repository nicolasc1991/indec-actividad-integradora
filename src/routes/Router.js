// Endpoints for external data
const express = require('express');
const router = express.Router();
// const knex = require('../../db/db');
const { getLastBanks, getBanks, getAccounts } = require('../controllers/controller');



router.route('/accounts')
    .get(getAccounts)


router.route('/banks/list')
    .get(getLastBanks)


router.route('/banks/between')
    .get(getBanks)






module.exports = router;