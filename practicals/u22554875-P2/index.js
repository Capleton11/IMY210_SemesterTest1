const { fileRead, fileWrite } = require('./fileManager');
const { checkDate, checkName } = require('./dataValidation');

const events = fileRead(); // This should now correctly read the file
console.log(events);

const validEvents = events.filter((event) => checkDate(event.date)); // Filter valid events based on date

const processedEvents = validEvents.map((event) => ({
  ...event,
  validName: checkName(event.name), // Add 'validName' property based on name validation
}));

fileWrite(processedEvents); 