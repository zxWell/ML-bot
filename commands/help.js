module.exports = async (bot,message,args,argsF) => {

const cnt = '```/help\n/test\n/color\n/or\n/private role\n/profile\n```'

    message.reply({
        ephemeral: true,
        content: "**Весь список команд был отправлен вам в личку.**"
    });

    const server = require('../config.json')
    message.author.send({
        content: cnt + "\nЕсли вы хотели зайти на тех. серв, то вот ссылочка:\n" + server.server
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
    description: "«Help» (англ. «Помощь») – это термин, используемый для выражения просьбы о помощи или поддержке.\nВ сфере информационных технологий и интернета, «help» может относиться к функциям и ресурсам, предназначенным для помощи пользователям в использовании программного обеспечения или поиске информации. В обыденной жизни, «help» может быть любым видом помощи, который человек может оказать другому в трудной ситуации или задаче. Общая идея «help» состоит в оказании поддержки и руководства при необходимости. Основное предназначение «help» – быть на стороне нуждающихся и предоставить то, что они ищут: простую и ясную помощь.",
    option: [
        {
            name: "commands",
            description: "Пися с командами",
            type: 3,
            required: true
        }
    ],
    defaultPermission: true
};