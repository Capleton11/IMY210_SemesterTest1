const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
//u22554875
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile(__dirname + '/index.js');
});
io.on('connection', (socket) => {
    console.log('A user connected with ID:', socket.id);

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const Poll = require('./poll');
const poll = new Poll([
    { name: 'pebble', votes: 0 },
    { name: 'sunshine', votes: 0 },
    { name: 'miso', votes: 0 },
    { name: 'panko', votes: 0 },
    { name: 'snowball', votes: 0 }
]);

io.on('connection', (socket) => {
    socket.emit('updateVotes', poll.getVotes());

    socket.on('vote', (name) => {
        poll.vote(name);
        io.emit('voteFeed', `${socket.id} voted for ${name}`);
        io.emit('updateVotes', poll.getVotes());
    });
});



http.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});