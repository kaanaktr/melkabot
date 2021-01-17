const Discord = require("discord.js");
const db = require("wio.db");

exports.run = async (client, message, args) => {
  let kanal = message.mentions.channels.first();
  if (!kanal)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(":x: **Eksik Kullanım: +modlog <#kanal>**")
    );
  db.set(`uyarsunucu_${message.guild.id}`, kanal);
  let discord = new Discord.MessageEmbed()
    .setDescription(
      `:white_check_mark: **Bu sunucunun Mod-Log kanalı <#${kanal.id}> olarak ayarlandı!**`
    )
    .setColor("GREEN");
  message.channel.send(discord);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "modlog"
};
