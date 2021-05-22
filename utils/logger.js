/* 
   Simple logger made by @Androz2091 (https://github.com/Androz2091)
*/
const { bgBlue, black } = require("chalk");

function dateTimePad(value, digits) {
  let number = value;
  while (number.toString().length < digits) {
    number = "0" + number;
  }
  return number;
}

function format(tDate) {
  return (
    tDate.getFullYear() +
    "-" +
    dateTimePad(tDate.getMonth() + 1, 2) +
    "-" +
    dateTimePad(tDate.getDate(), 2) +
    " " +
    dateTimePad(tDate.getHours(), 2) +
    ":" +
    dateTimePad(tDate.getMinutes(), 2) +
    ":" +
    dateTimePad(tDate.getSeconds(), 2) +
    "." +
    dateTimePad(tDate.getMilliseconds(), 3)
  );
}
function convertTZ(date, tz) {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tz,
    })
  );
}

module.exports = class Logger {
  static log(content, type = "log") {
    const rawDate = new Date(Date.now());
    const date = `[${format(convertTZ(rawDate, "Europe/Paris"))}]:`;
    switch (type) {
      // Check the message type and then print him in the console
      case "log": {
        return console.log(`${date} ${bgBlue(type.toUpperCase())} ${content} `);
      }
      case "warn": {
        return console.log(
          `${date} ${black.bgYellow.bold(type.toUpperCase())} ${content} `
        );
      }
      case "error": {
        return console.log(
          `${date} ${black.bgRed.bold(type.toUpperCase())} ${content} `
        );
      }
      case "cmd": {
        return console.log(
          `${date} ${black.bgWhite.bold(type.toUpperCase())} ${content}`
        );
      }
      case "ready": {
        return console.log(
          `${date} ${black.bgGreen.bold(type.toUpperCase())} ${content}`
        );
      }
      /*
        Made by me :)
      */
      case "event": {
        return console.log(
          `${date} ${black.bgWhite.bold(type.toUpperCase())} ${content}`
        );
      }
      case "/": {
        return console.log(
          `${date} ${black.bgWhite.bold(type.toUpperCase())} ${content}`
        );
      }
      default:
        throw new TypeError(
          "Logger type must be either warn, log, ready, cmd or error."
        );
    }
  }
};
