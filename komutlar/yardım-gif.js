const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.MessageEmbed()
  .setColor(0x36393E)

      .setAuthor(`Melka BOT Gif Menüsü`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
  .setColor("GOLD")
.addField("+gif-ara","Belirttiğiniz gifi bulur atar.", true)
  .addField("+gif-man","Erkek gifi atar.", true)
  .addField("+gif-woman","Kız gifi atar.", true)
  .addField("+gif-couple","Kız ve Erkek gifi atar.", true)
  .addField("+gif-baby","Babek gifi atar.", true)
    .addField("+gif-animal","Hayvan gifi atar.", true)
  .addField(`Linkler:`, `[Destek Sunucusu](https://discord.gg/d7ezjuCQxK) | [Davet Linki](https://discord.com/oauth2/authorize?client_id=794484818020532224&scope=bot&permissions=8) | [Oy Ver](https://discord.ly/melka)`)
  .setImage(`https://cdn.discordapp.com/attachments/796770880332103740/796770937365725244/Gif_Ayrma_Cubuklar_8.gif`)
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
  name: 'gif-menü'
};



