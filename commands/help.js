module.exports = async (bot,message,args,argsF) => {

const cnt = '**/help\n/test\n/color\n/or\n/private role\n/profile\n**'

    message.reply({
        ephemeral: true,
        content: "**Весь список команд был отправлен вам в личку.**"
    });

    message.author.send({
        content: cnt
        //content: '**/help\n/ping\n/avatar\n/say\n/test\n/color\n/or\n/private role\n/profile\n/clear\n**'
    })

    if(args[0] === "helpCmd"){
        return message.channel.send(cnt)
    }

    //.catch(err => console.error("не то " + err))
};
module.exports.names = ["help"];
module.exports.interaction = {
    name: "help",
    description: "в переводе - помощь",
    option: [
        {
            name: "commands",
            description: "список команд",
            type: 3,
            required: true
        }
    ],
    defaultPermission: true
};