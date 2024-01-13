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
            content: "- Всего серверов: *`"+`${bot.guilds.cache.size}`+"`*"
        })
    }

    if(args.info === "AllUsers"){
        return message.reply({
            content: "- Всего народу на сервере: *`"+`${totalUsers}`+"`*"
        })
    }


    const User = `${totalUsers}`
    const Guild = `${bot.guilds.cache.size}`
    message.reply({
        content: "- Сводка по бестиарию.\nСервера:*`" + `${Guild}` + "`*\nЧелики:*`" + `${User}` + "`*"
    })

};
module.exports.names = ["info"];
module.exports.interaction = {
    name: 'info',
    description: 'Чек инфу',
    options: [
        {
            name: "info",
            description: "Информейшн про...",
            type: "STRING",
	        choices: [
                {
                    name: "Сервера",
                    value: "AllGuilds"
                },
                {
                    name: "Народ",
                    value: "AllUsers"
                }
            ],
            required: false
        },
    ],
    defaultPermission: true
};
