const assert = require('chai').assert;
const flowService = require('../services/flowService');

describe('Flow Distribution', () => {
    it('should correctly distribute users to astrologers', () => {
        const users = [1, 2, 3, 4, 5]; // Sample user IDs
        flowService.distributeUsers(users);

        // Test that the number of users is distributed among astrologers
        const totalUsers = flowService.astrologers.reduce((sum, astrologer) => sum + astrologer.userCount, 0);
        assert.equal(totalUsers, users.length, 'Users are distributed correctly');
    });

    it('should update flow for top astrologer', () => {
        flowService.setAstrologerFlow(1, 2);  // Set flow for astrologer 1 to 2

        const astrologer = flowService.astrologers.find(ast => ast.id === 1);
        assert.equal(astrologer.flowMultiplier, 2, 'Flow for astrologer is updated correctly');
    });
});
