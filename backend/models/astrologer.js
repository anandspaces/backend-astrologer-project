class Astrologer {
  constructor(id, name, flowMultiplier = 1) {
      this.id = id;
      this.name = name;
      this.flowMultiplier = flowMultiplier; // Used to adjust flow for top astrologers
      this.userCount = 0; // Tracks the number of users allocated to this astrologer
  }

  incrementUserCount() {
      this.userCount += 1;
  }
}

module.exports = Astrologer;
