const {Permissions} = require('discord.js');
const Memory = require('../Memory/Memory.json')
const guilds = Memory.guilds
const users = Memory.users

module.exports = async (bot,message,args,argsF) => {

    var totalUsers = bot.guilds.cache.reduce((acc, value) => acc + value.memberCount, 0)

    if(!message.channel.permissionsFor(message.author).has(Permissions.FLAGS.ADMINISTRATOR)) {
        return message.reply("У тебя не достаточно прав");
    }

    /*if(args.info === "AllGuilds"){
        return message.reply({
            content: `${guilds}`
        })
    }

    if(args.info === "AllUsers"){
        return message.reply({
            content: `${users}`
        })
    }*/

    if(args.info === "AllGuilds"){
        return message.reply({
            content: `всего серверов: ${bot.guilds.cache.size}`
        })
    }

    if(args.info === "AllUsers"){
        return message.reply({
            content: `всего участников: ${totalUsers}`
        })
    }

    if(args[0] === "AllUsers" || args[0] === "AllGuilds"){
        return message.reply({
            content: `введите команду через слэш и выберите нужное вам действие`
        })
    }

    message.reply({
        content: `вся инфорация: \n\nвсего серверов: ${bot.guilds.cache.size}\nвсего участников: ${totalUsers}`
    })

};
module.exports.names = ["info"];
module.exports.interaction = {
    name: 'info',
    description: 'посмотреть информацию',
    options: [
        {
            name: "info",
            description: "информация о...",
            type: "STRING",
	        choices: [
                {
                    name: "AllGuilds",
                    value: "AllGuilds"
                },
                {
                    name: "AllUsers",
                    value: "AllUsers"
                }
            ],
            required: true
        },
    ],
    defaultPermission: true
};