module.exports = async (bot) => {

    let totalUsers = bot.guilds.cache.reduce((acc, value) => acc + value.memberCount, 0)
    var activities = [ `${bot.guilds.cache.size} серверов`, `${totalUsers} пользователей!` ], i = 0;
    setInterval(() => bot.user.setActivity(`help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }),30000);

    bot.user.setStatus("idle");

    const guildData = bot.guilds.cache.get("1184447509448368208");
    setInterval(() => {
        const channels = {
            0: bot.channels.cache.get("1188176662865645650"),
            1: bot.channels.cache.get("1188176717307719790"),
        };
        channels[0].setName("Участников: " + guildData.memberCount);
        channels[1].setName("Ботов: " + guildData.members.cache.filter(user=>user.user.bot).size);
    }, 15000);

    console.log(bot.Memory.console);
};