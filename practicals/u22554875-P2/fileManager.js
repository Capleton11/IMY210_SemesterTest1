const fs = require('fs');

function fileRead() {
  const data = fs.readFileSync('events.json', 'utf8'); // Use readFileSync with 'utf8' encoding
  return JSON.parse(data); // Return parsed JSON data
}

function fileWrite(content) {
  fs.writeFileSync('newEvents.json', JSON.stringify(content, null, 2)); // Use writeFileSync
}

module.exports = { fileRead, fileWrite };