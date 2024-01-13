module.exports = (bot) => {
    bot
    .on('ready', ()=>require('./ready')(bot))
    .on('guildMemberAdd', (member)=>require('./guildMemberAdd')(bot, member))
    .on('guildMemberRemove', (member)=>require('./guildMemberRemove')(bot, member))
    .on('messageCreate', (message) => require('./messageCreate')(bot, message))
    .on('interactionCreate', (interaction) => require('./interactionCreate')(bot, interaction))
};