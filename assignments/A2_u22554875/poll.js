//u22554875
class Poll {
    constructor(votes) {
        this.votes = votes;
    }

    vote(name) {
        const cat = this.votes.find(cat => cat.name === name);
        if (cat) {
            cat.votes++;
        }
    }

    getVotes() {
        return this.votes;
    }
}

module.exports = Poll;