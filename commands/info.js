const {Permissions} = require('discord.js');
const Memory = require('../Memory/Memory.json')
const guilds = Memory.guilds
const users = Memory.users

module.exports = async (bot,message,args,argsF) => {

    var totalUsers = bot.guilds.cache.reduce((acc, value) => acc + value.memberCount, 0)

    if(!message.channel.permissionsFor(message.author).has(Permissions.FLAGS.ADMINISTRATOR)) {
        return message.reply("У тя недостаток прав, бро.... :skull:");
    }
    /* ✔️ */

    if(args.info === "AllGuilds"){
        return message.reply({
            content: "- Всего серверов: *`"+`${bot.guilds.cache.size}`+"`*"
        })
    }
    /* ✔️ */

    if(args.info === "AllUsers"){
        return message.reply({
            content: "- Всего народу на сервере: *`"+`${totalUsers}`+"`*"
        })
    }
    /* ✔️ */

    if(args.info === "server"){
        return message.reply({
            content: "- Этот сервер основан на прошлом Meme Land'e.\nЭбола удалил старый (еблан), а мы основали новый."
        })
    }

    if(args.info === "dev"){
        return message.reply({
            content: "- ~~Чурки~~Разработчики бота\n-- Код, финтиплюшки и оживление бота --\n* well ~ well.js | 1011761911123148850\n-- Финтиплюшки и работа с текстом --\n* !WerTerKer12.htmł ~ werterker12 | 814200541336830014"
        })
    }

    const User = `${totalUsers}`
    const Guild = `${bot.guilds.cache.size}`
    message.reply({
        content: "### Сводка по бестиарию.\nСервера: *`" + `${Guild}` + "`*\nЧелики: *`" + `${User}` + "`*"
    }) 
    /* ✔️ */ 

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
                },
                {
                    name: "О сервере",
                    value: "server"
                },
                {
                    name: "Разработчики",
                    value: "dev"
                }
            ],
            required: false
        },
    ],
    defaultPermission: true
};

/* https://soundcloud.com/roadrunner-usa/people-shit?in=david-kahaev/sets/metall&si=c05cbfeefa4f4928959211dea44ceebb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing */