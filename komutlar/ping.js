const Discord = require("discord.js"),
  client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  message.channel.send(new Discord.MessageEmbed() .setColor("GOLD") .setDescription(`:ping_pong: **Ping: __${client.ws.ping}__ms!**`));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'ping'
};