/**
 * @param {import('discord.js').Client} bot 
 * @param {import('discord.js').Message}
 */



module.exports = async (bot, message) => {

    const fs = require('fs');
    const config = require('../config.json');
    const DiscordDB = require('simple-discord.db'); //Память)
    bot.Memory = new DiscordDB("Memory", bot); //Тоже память))

    // bot.Memory = require('./Memory.json');

    // setInterval(() => {
    //     fs.writeFileSync(`./Memory.json`, JSON.stringify(bot.Memory, null, '\t'))
    // }, 10000)

    const Bot = message.author.bot
    const ABot = message.author.bot.username
    //const ddd = fs.readFile(`../Memory.json`)

    bot.on('messageCreate', () => {
        if(err) return console.log(err)
        if(Bot) return (
            message.reply(`съебался в страхе, ${ABot}`)
        )
        message.reply('1')
    })


}