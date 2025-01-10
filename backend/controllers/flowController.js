const flowService = require('../services/flowService');
const User = require('../models/user');

// Initialize astrologers
flowService.initAstrologers();

// API to distribute users
exports.distributeUsers = (req, res) => {
    const { userIds } = req.body;  // Expects an array of user IDs
    const users = userIds.map(id => new User(id));
    flowService.distributeUsers(users);
    res.status(200).json({ message: 'Users distributed successfully' });
};

// API to set flow for top astrologers
exports.setFlowForAstrologer = (req, res) => {
    const { astrologerId, flowMultiplier } = req.body;
    flowService.setAstrologerFlow(astrologerId, flowMultiplier);
    res.status(200).json({ message: `Flow for astrologer ${astrologerId} updated successfully` });
};
