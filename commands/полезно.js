module.exports = async (bot,message,args) => {

    if(args.dvp === "Colors"){
        return message.reply({
            content: "- потом 😊"
        })
    }

    message.reply({
        ephemeral: false,
        content: '- динаху 😡'})

};

module.exports.names = ["dvp"]
module.exports.interaction = {
    name: 'dvp',
    description: 'для разрабов',
    options: [
        {
            name: "dvp",
            description: "Информейшн про...",
            type: "STRING",
	        choices: [
                {
                    name: "цвета",
                    value: "Colors"
                }
            ],
            required: false
        },
    ],
    defaultPermission: true
};