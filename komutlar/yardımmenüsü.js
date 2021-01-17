const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.MessageEmbed()
  .setColor("GOLD")
      .setAuthor(`Melka BOT Yardım Menüsü`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.addField(`+genel`, "Genel Komutları Gösterir.", true)
  .addField(`+gif-menü`, "Gif Komutları Gösterir.", true)
   .addField(`+eğlence`, "Eğlence Komutları Gösterir.", true)
  .addField(`+yetkili`, "Yetkili Komutları Gösterir.", true)
  .addField(`+ydavet`, "Davet Komutları Gösterir.", true)
.addField(`+sistem`, "Sistem Komutları Gösterir.", true)
.addField(`Linkler:`, `[Destek Sunucusu](https://discord.gg/d7ezjuCQxK) | [Davet Linki](https://discord.com/oauth2/authorize?client_id=794484818020532224&scope=bot&permissions=8) | [Oy Ver](https://discord.ly/melka)`)
.setImage(`https://cdn.discordapp.com/attachments/789418639760687144/796307959520952340/rainbow.gif`)
.setFooter(client.user.username, client.user.displayAvatarURL())
return message.channel.send(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};