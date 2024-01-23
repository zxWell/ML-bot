const { owners_id } = require('../../config.json');

exports.run = async (bot, message, args) => {
  let msg = message;
  
  owners_id.forEach(async function(owner) {
    if(message.author.id !== owner) return;
  
  
  if(!args.length) return args.missing(msg, `Must provide a command to reload.`, bot.commands.get('reload').help);

  let command;
  if (bot.commands.has(args[1])) {
    command = bot.commands.get(args[1]);
  } else if (bot.aliases.has(args[1])) {
    command = bot.commands.get(bot.aliases.get(args[1]));
  }
  if(!command) return msg.channel.send(`The command \`${args[1]}\` doesn't seem to exist, nor is it an alias. Try again!`);

  if(command.db) await command.db.close();

  command = command.help.name;

  delete require.cache[require.resolve(`../../commands/${args[0]}/${command}.js`)];
  let cmd = require(`../../commands/${args[0]}/${command}`);
  bot.commands.delete(command);
  if(cmd.init) cmd.init(bot);
  bot.aliases.forEach((cmd, alias) => {
    if (cmd === command) bot.aliases.delete(alias);
  });
  bot.commands.set(command, cmd);
  cmd.conf.aliases.forEach(alias => {
    bot.aliases.set(alias, cmd.help.name);
  });

  msg.channel.send(`The command \`${command}\` has been reloaded`);
  });
};

exports.conf = {
  aliases: [],
};

exports.help = {
  name: 'reload',
  description: 'Reloads a command that\'s been modified.',
  usage: 'reload <category> <command>'
};