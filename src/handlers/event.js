const { readdirSync } = require("fs");

module.exports = bot => {
    const events = readdinrSync('./src/events/');
    for (let event of events) {
        let file = require(`../events/${event}`);
        client.on(event.split('.')[0], (...args) => file(bot, ...args));
    }
}