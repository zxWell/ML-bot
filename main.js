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

const DiscordDB = require('simple-discord.db');
bot.Memory = new DiscordDB("Memory", bot);

/*bot.createGuild = (guild = {id: "!", name: "!"}) =>{
    return {
        id: guild.id,
        name: guild.name,
        muted: [],
        prefix: ".",
        members: {},
        warns: 0
    };
};
bot.createUser = (user = {id: "!", username: "!"}) =>{
    return {
        id: user.id,
        name: guild.name,
        notes: []
    };
};
bot.createMember = (member = {id: "!", user: {username: "!"}, guild: {id: "!"}}) =>{
    return {
        id: guild.id,
        name: member.user.username,
        guildId: member.guild.id,
        warns: []
    };
};

(async function () {
    await bot.Memory.create();
    bot.Memory.setAutoStart(true);
    bot.Memory.setBackUp(1000*60*60*4);
    bot.Memory.setAutoSave(1000*60*60);
    bot.Memory.setGuilds(bot.createGuild);
    bot.Memory.setUsers(bot.createUser);
    bot.Memory.setMembers(bot.createMember);
    bot.Memory.save();
}());*/