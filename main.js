const Discord = require('discord.js'),
    fs = require('fs'),
    config = require('./config.json');
config.bruh.intents = new Discord.Intents(config.bruh.intents);

// const bot = new Discord.Client(config.bruh);
// bot.login(config.token);

const bot = new Discord.Client(config.bruh);
bot.login(config.token);

const DiscordDB = require('simple-discord.db'); //Память
bot.Memory = new DiscordDB("Memory", bot); //Памятная память

require('./handlers')(bot); //Запуск handler'ов
require('./event')(bot); //Запуск ивентов
require('./eco')(bot); //ЭКОНОМИКААА!!!!!ВАААААААА!!!!!!!!!!!