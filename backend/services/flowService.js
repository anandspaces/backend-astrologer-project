const Astrologer = require('../models/astrologer');

class FlowService {
    constructor() {
        this.astrologers = [];
    }

    // Initialize astrologers (e.g., 500 astrologers)
    initAstrologers() {
        for (let i = 1; i <= 500; i++) {
            this.astrologers.push(new Astrologer(i, `Astrologer ${i}`));
        }
    }

    // Set flow for top astrologer by updating their flow multiplier
    setAstrologerFlow(id, multiplier) {
        const astrologer = this.astrologers.find(ast => ast.id === id);
        if (astrologer) {
            astrologer.flowMultiplier = multiplier;
        }
    }

    // Distribute users to astrologers based on the flow distribution algorithm
    distributeUsers(users) {
        users.forEach(user => {
            let totalWeight = this.astrologers.reduce((sum, astrologer) => sum + astrologer.flowMultiplier, 0);
            let rand = Math.random() * totalWeight;
            let accumulatedWeight = 0;

            for (let astrologer of this.astrologers) {
                accumulatedWeight += astrologer.flowMultiplier;
                if (rand < accumulatedWeight) {
                    astrologer.incrementUserCount();
                    break;
                }
            }
        });
    }
}

module.exports = new FlowService();
