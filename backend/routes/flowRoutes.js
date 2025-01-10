const express = require('express');
const router = express.Router();
const flowController = require('../controllers/flowController');

// Route to distribute users
router.post('/distribute-users', flowController.distributeUsers);

// Route to update flow for top astrologers
router.post('/set-flow', flowController.setFlowForAstrologer);

module.exports = router;
