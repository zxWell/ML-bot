const Discord = require('discord.js')

module.exports = async (bot, message) => {
    
   if(message.author.bot) return;

   //const content = message.channel.messages.fetch('1050690021822300183')

   //console.log(content)

 //const content = bot.channels.messages.cache.get("1050802537789399140");

 //message.channel.send(content);

 let embed = new Discord.MessageEmbed()
    .setTitle('Было удалено сообщение!')
    .setColor('RANDOM')
    .addField(`Удалённое сообщение:`, message.content, true)
    .addField("Автор:",`${message.author.tag} (${message.author})`,true)
    .addField("Канал:", `${message.channel}`, false)
    .setFooter(' - ',`${message.author.avatarURL()}`)
    .setTimestamp(message.createdAt);
  bot.channels.cache.get("1188065899563986944").send({embeds: [embed]}); // айди вашего канала с логами

};