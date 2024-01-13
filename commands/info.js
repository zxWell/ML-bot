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

    const User = `${totalUsers}`
    const Guild = `${bot.guilds.cache.size}`
    message.reply({
        content: "### Сводка по бестиарию.\nСервера: *`" + `${Guild}` + "`*\nЧелики: *`" + `${User}` + "`*"
    }) 
    /* ✔️ */

    if(args.info === "colors"){
        message.reply({
            ephemeral: true, 
            content: "- Цвета были отправлены вам в ЛС",
        });
        message.author.send("Вот три сайта с HEX и RGB кодами");
        message.author.send("Первый источник:**\n" + `https://colorscheme.ru/html-colors.html?ysclid=lbhpdm95z3633248177`);
        message.author.send("Второй источник:**\n" + `https://htmlcolorcodes.com/colors/`);
        message.author.send("Третий источник:**\n" + `https://www.color-hex.com/`);
    }

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
                    name: "Цвета",
                    value: "colors"
                }
            ],
            required: false
        },
    ],
    defaultPermission: true
};

/* https://soundcloud.com/roadrunner-usa/people-shit?in=david-kahaev/sets/metall&si=c05cbfeefa4f4928959211dea44ceebb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing */
