module.exports = async (bot,message,args,argsF) => {

message.reply('Монета подбрасывается...')

var random = Math.floor(Math.random() * 5); // Объявление переменной random - она вычисляет случайное число от 1 до 3

if (random == 1) { // Если вычислено число 1, то выпадает орёл.
    message.channel.send(':full_moon: Орёл!')
} else if (random == 2) { // Если вычислено число 2, то выпадает решка.
    message.channel.send(':new_moon: Решка!')
} else if (random == 3) { // Если вычислено число 3, то монета падает         ребром.
    message.channel.send(':last_quarter_moon: Монета упала ребром!')
} else if (random == 4) { // Если вычислено число 3, то монета падает         ребром.
    message.channel.send(':flushed: Монета не упала...')
}
};
module.exports.names = ["heads_or_tails", "орёл или решка"];
module.exports.interaction = {
    name: 'heads_or_tails',
    description: 'игра в орёл или решка',
    type: "STRING",
    option: [
        {
            name: "hd",
            description: "орёл или решка",
            type: 3,
            required: true
        }
    ],
    defaultPermission: true
};