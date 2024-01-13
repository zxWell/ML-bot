module.exports = async (bot) => {
    console.log()
    console.log()
    console.log(bot.user.username + " ready");
    console.log()
    console.log()

    // bot.channels.cache.get('1050802537789399140')
    // .send("online <a:spunkboi:1053318106052841482>") //<a:wideputin:1053318122611937390>

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
    }, 10000);

    const commandsIT = bot.application.commands; //Или bot.application.commands - если команды будут глобальными
    await commandsIT.fetch(); //Найти все команды

    for (const command of bot.commands.any) {
        if(command.interaction) { //Если слэш команда есть
            const interaction = await commandsIT.cache.find(com=>com.name == command.interaction.name); //Найти команду в боте по названию
            if(!interaction) { //Если команда не была найдена в боте
                commandsIT.create(command.interaction); //Создать команду
            } else  //Если команда есть
            if(JSON.stringify(interaction.options) !== JSON.stringify(command.interaction.options)) {//И параметры команды не совпадают (т.е. команда была изменена)
                interaction.edit(command.interaction); //Редактируем эту команду
            }
        }
    }
};