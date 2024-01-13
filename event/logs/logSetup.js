module.exports = (bot) => {
bot
    .on('messageCreate', (message) => require('./consoleLog')(bot, message))
    .on('messageDelete', (message) => require('./messageDelete')(bot, message))
    .on('guildMemberAdd', (member) => require('./guildMemberAdd')(bot, member))
    .on('guildMemberRemove', (member) => require('./guildMemberRemove')(bot, member))
}