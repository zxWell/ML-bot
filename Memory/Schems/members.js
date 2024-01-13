module.exports = member=> {
            return {
                id: member.id,
                username: member.user.username,
                guildId: member.guild.id
            };
        }