const AkariClient = require('./handle/AkariClient'),
    config = require('../config.json');
const bot = new AkariClient({
  fetchAllMembers: true,
  disabledEvents: ["TYPING_START", "USER_NOTE_UPDATE"],
  disableEveryone: true
});

require('./handle/events')(bot);
require('./handle/module')(bot);

bot.login(config.token);