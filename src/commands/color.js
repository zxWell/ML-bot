module.exports = async (bot,message,args,argsF) => {

    message.reply({ephemeral: true, content: "**все цвета были высланы вам в личку. **"})

    message.author.send("(1)**Cсылка на источник:** " + `https://colorscheme.ru/html-colors.html?ysclid=lbhpdm95z3633248177`);
    message.author.send("(2)**Cсылка на источник:** " + `https://htmlcolorcodes.com/colors/`);
    message.author.send("(3)**Cсылка на источник:** " + `https://www.color-hex.com/`);

};
module.exports.names = ["hex", "color", "colors", "цвета"];
module.exports.interaction = {
    name: "colors",
    description: "цвета/оттенки и их HEX | RGB",
    type: "STRING",
    required: false,
    defaultPermission: true
};
