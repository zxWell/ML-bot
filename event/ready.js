module.exports = async (bot) => {
    console.log()
    console.log()
    console.log(bot.user.username + " ready");
    console.log()
    console.log()

    let totalUsers = bot.guilds.cache.reduce((acc, value) => acc + value.memberCount, 0)
    var activities = [ `${bot.guilds.cache.size} серверов!`, `${totalUsers} пользователей!` ], i = 0;
    setInterval(() => bot.user.setActivity(`«/help» | ${activities[i++ % activities.length]}`, { type: "WATCHING" }),30000);

    bot.user.setStatus("idle");

 console.log(bot.Memory.console);
 console.log(bot.Memory.consoleClear);
};
