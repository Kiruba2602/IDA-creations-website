const express = require('express');
const router = express.Router();
const { createContact, getContacts } = require('../controller/controller');

//POST
router.post('/', createContact);

//GET
router.get('/', getContacts);

module.exports = router;