const {Permissions} = require('discord.js');
const Memory = require('../Memory/Memory.json')
const guilds = Memory.guilds
const users = Memory.users

module.exports = async (bot,message,args,argsF) => {

    var totalUsers = bot.guilds.cache.reduce((acc, value) => acc + value.memberCount, 0)

    if(!message.channel.permissionsFor(message.author).has(Permissions.FLAGS.ADMINISTRATOR)) {
        return message.reply("У тя недостаток прав, бро.... :skull:");
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
            content: `Всего серверов: ${bot.guilds.cache.size}`
        })
    }

    if(args.info === "AllUsers"){
        return message.reply({
            content: `Всего народу: ${totalUsers}`
        })
    }

    if(args[0] === "AllUsers" || args[0] === "AllGuilds"){
        return message.reply({
            content: `Вводи «/» и тыкай куда надо, дальше разберёшься`
        })
    }

    message.reply({
        content: `Общая инфушка: \n\nСервера: ${bot.guilds.cache.size}\nЧелики: ${totalUsers}`
    })

};
module.exports.names = ["info"];
module.exports.interaction = {
    name: 'info',
    description: 'Чек инфу',
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