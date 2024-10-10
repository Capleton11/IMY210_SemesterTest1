//u22554875
const socket = io();

socket.on('connect', () => {
    console.log('I connected with ID:', socket.id);
});

const form = document.getElementById('poll');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const selectedName = document.querySelector('input[name="catName"]:checked').value;
    socket.emit('vote', selectedName);
});

socket.on('updateVotes', (votes) => {
    votes.forEach((vote) => {
        document.querySelector(`label[for="${vote.name}"] span`).textContent = vote.votes;
    });
    document.getElementById('total-votes').textContent = votes.reduce((total, vote) => total + vote.votes, 0);
});

socket.on('voteFeed', (message) => {
    const feed = document.getElementById('feed');
    const newEntry = document.createElement('p');
    newEntry.textContent = message;
    feed.appendChild(newEntry);
});