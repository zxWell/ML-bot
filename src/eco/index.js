module.exports = async (bot) => {
    bot
    .on('messageCreate', (message) => require('./msgEco')(bot, message))
}