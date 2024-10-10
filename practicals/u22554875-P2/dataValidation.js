function checkDate(datestr) {
   const one = new Date(datestr);
   const nine = new Date(one.getFullYear(), 8, 9); // September 9th
   const ten = new Date(one.getFullYear(), 8, 21); // September 21st
   return one >= nine && one <= ten; // Adjust logic if necessary
 }
 
 function checkName(name) {
   const regex = /a-zA-Z0-9/; // Corrected regex to include start and end anchors
   return regex.test(name);
 }
 
 module.exports = { checkDate, checkName };