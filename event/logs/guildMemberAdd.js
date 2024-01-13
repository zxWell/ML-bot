module.exports = async (bot, member) => {
    if(bot.tex) return;
    const channel = bot.channels.cache.get("1184468247089795092");

    channel.send({
        embeds: [{
            title: "Новый человек!",
            description: `Этим человеком был ${member}`
        }]
    });
};