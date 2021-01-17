const Discord = require("discord.js");
const fs = require("fs");
const db = require("wio.db");
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
  
  let prefix =ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
  .setColor("orange")
  .setAuthor(` » ${message.guild.name} Sunucu Ayarları «`,"https://cdn.discordapp.com/emojis/601753206090891265.png?v=1")
  .addField(`:sparkles: Küfür`, db.has(`küfürEngel_${message.guild.id}`) ? `${db.fetch(`küfürEngel_${message.guild.id}`)}`: ` Kapalı`, true)
  .addField(`:sparkles: Reklam`, db.has(`reklam_${message.guild.id}`) ? `${db.fetch(`reklam_${message.guild.id}`)}`: ` Kapalı`, true)
  .addField(`:sparkles: Caps Lock`, db.has(`caps_${message.guild.id}`) ? `${ message.guild.channels.get(db.fetch(`caps_${message.guild.id}`)).name}`: ` Kapalı`, true)
  .addField(`:sparkles: Oto Rol`, db.has(`autoRole_${message.guild.id}`) ? `${ message.guild.roles.get(db.fetch(`autoRole_${message.guild.id}`)).name}`: ` Kapalı`, true)
 .setFooter(client.user.username, client.user.displayAvatarURL({dynamic:true}))
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ayarlar"],
  permLevel: 0,
  kategori: "ayarlar"
};

exports.help = {
  name: "ayar",
  description: "Sunucu ayarlarını gösterir",
  usage: "ayar"
};