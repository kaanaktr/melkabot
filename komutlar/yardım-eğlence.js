const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.MessageEmbed()
  .setColor("GOLD")
      .setAuthor(`Melka BOT Yardım Menüsü`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.addField(`${prefix}balık-tut`,"Balık tutar.", true)
  .addField(`${prefix}stresçark`,"Stres çarkı çevirir.", true)
    .addField(`${prefix}8ball`,"8ball oynar.", true)
  .addField(`${prefix}slots`,"Slots oynar.", true)
    .addField(`${prefix}koş`,"Koşarsınız.", true)
  .addField(`${prefix}yılbaşı`,"Yılbaşına Kaç Gün Kaldı Öğrenirsiniz.", true)
.addField(`${prefix}kartopu`,"Etiketlediğin Kişiye Kartopu Atarsın.", true)
.addField(`${prefix}kaçcm`,"Kaç cm olduğunu öğrenirsiniz.", true)
  .addField(`Linkler:`, `[Destek Sunucusu](https://discord.gg/d7ezjuCQxK) | [Davet Linki](https://discord.com/oauth2/authorize?client_id=794484818020532224&scope=bot&permissions=8) | [Oy Ver](https://discord.ly/melka)`)
  .setImage(`https://cdn.discordapp.com/attachments/789426066161926174/794547716998823946/standard.gif`)
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
  name: 'eğlence'
};