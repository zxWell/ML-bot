module.exports = guild=> {
            return {
                name: guild.name,
                owner: guild.ownerId,
                id: guild.id,
                members: {}
            };
        }