const Discord = require('discord.js'),
    fs = require('fs'),
    config = require('./config.json');
config.bruh.intents = new Discord.Intents(config.bruh.intents);

const bot = new Discord.Client(config.bruh);
bot.login(config.token);

require('./event')(bot);

bot.commands = new Discord.Collection();
bot.commands.any = [];

const commandFiles = fs.readdirSync('./commands');

for (const file of commandFiles) {
    const comand = require(`./commands/${file}`);
    comand.names.forEach(el => {
        bot.commands.set(el, comand);
    });
    bot.commands.any.push(comand);
};