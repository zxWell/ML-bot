module.exports = (bot) => {
    bot
    .on('messageCreate', (message) => require('./messageHandler.js')(bot, message))
    .on('interactionCreate', (interaction) => require('./interactionHandler.js')(bot, interaction));
};