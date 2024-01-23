let randstring = ["🌑","🧻","✂️"];

module.exports.run = async (bot,message,args) => {
    const filter = m => (m.content == '🌑' || m.content =='✂️' || m.content == '🧻');
    await message.channel.send('Добро пожаловать в "Камень ножницы бумага", выберите предмет: ✂️ 🧻 🌑').then(() => {
        message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
            .then(collected => {
                message.channel.send(getWin(collected.first().content,randstring[getRandomInt(3)]));
            })
            .catch(collected => {
                message.channel.send('время вышло');
            });
        });
}

function getWin(first, second)
{
    let str = "";
    if(first == second){return str = '> ' + first + '\n' + 'Я выбрал ' + first +', Draw'; }
    else if(first == randstring[0] && second == randstring[1]){return str = '> ' + first + '\n' + 'Я выбрал ' + second + ' You Lose'; }
    else if(first == randstring[1] && second == randstring[2]){return str = '> ' + first + '\n' + 'Я выбрал ' + second + ' You Lose'; }
    else if(first == randstring[2] && second == randstring[0]){return str = '> ' + first + '\n' + 'Я выбрал ' + second + ' You Lose'; }
    else if(first == randstring[2] && second == randstring[1]){return str = '> ' + first + '\n' + 'Я выбрал ' + second + ' You Won'; }
    else if(first == randstring[1] && second == randstring[0]){return str = '> ' + first + '\n' + 'Я выбрал ' + second + ' You Won'; }
    else if(first == randstring[0] && second == randstring[2]){return str = '> ' + first + '\n' + 'Я выбрал ' + second + ' You Won'; }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
module.exports.names = ["Rock paper scissors", "камень ножницы бумага", "rpc", "кнб"]