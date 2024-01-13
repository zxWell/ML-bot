const Discord = require('discord.js')

module.exports = (bot, member) => {
    
    let embed = new Discord.MessageEmbed()
    .setThumbnail(member.user.avatarURL())
    .setTitle(`Пользователь покинул сервер`)
    .addField('Пользователь:', member.user)
    .setColor('RANDOM')
    //member.send(embed);
    bot.channels.cache.get('1188065899563986944').send({embeds: [embed]}); // айди вашего канала с логами

}