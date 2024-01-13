const later = (delay, value) =>
    new Promise(resolve => setTimeout(resolve, delay, value));
module.exports = async (bot,message,args,argsF) => {
    const {channel, author, member, guild} = message;
    const options = {};
    message.reply("название роли?");
    const filter = m => m.author == author;
    options.name = (await channel.awaitMessages({filter, max: 1})).first().content;
    channel.send("Цвет роли?");
    options.color = (await channel.awaitMessages({filter, max: 1})).first().content;
    channel.send("Показывать роль отдельно?");
    const hoist = (await channel.awaitMessages({filter, max: 1})).first().content;
    if(hoist.match(/да|конечно|само собой|давай|я не против|го|естественно|йес/)) options.hoist = true;
    channel.send("роль создается...").catch(err=> message.reply({ephemeral: true, content: "перепроверьте данные, которые вы ввели!" + "```" + `${err}` + "```"}));
    const role = await guild.roles.create(options);
    await member.roles.add(role);
    return channel.send("Роль выдана.");
};
module.exports.names = ["create_role", "НоваяРоль"];
module.exports.interaction = {
    name: 'create_role',
    description: 'создать свою личную роль',
    type: "STRING",
    required: true,
    defaultPermission: true
};