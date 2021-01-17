const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.MessageEmbed()
  .setColor("GOLD")
      .setAuthor(`Melka BOT Davet Menüsü`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.addField(`+rütbe-ekle`, "Rütbe Ekler.", true)
  .addField(`+rütbeler`, " Rütbeleri Gösterir 1 Den 10'a Kadar.", true)
   .addField(`+rütbe-sıfırla`, "Rütbeyi Sıfırlar.", true)
  .addField(`+davetleri-sıfırla`, "Davetleri Sıfırlar.", true)
  .addField(`+top`, "Lider Tablosunu Gösterir.", true)
  .addField(`+rank`, "Davetlerinizi Gösterir.", true)
  .addField(`+bonus-ekle`, "Bonus Ekler.", true)
  .addField(`+davet-kanal`, "Davet Kanalını Ayarlar.", true)
  .addField(`+davet-kanal-sıfırla`, "Davet Kanalını Sıfırlar.", true)
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
  name: 'ydavet'
};