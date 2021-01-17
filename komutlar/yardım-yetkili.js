const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.MessageEmbed()
  .setColor(0x36393E)
      .setAuthor(`Melka BOT Yetkili Menüsü`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
  .setColor("GOLD")
.addField(`${prefix}sil`,`Belirttiğiniz kadar mesajı siler.`, true)
  .addField(`${prefix}yaz`,`Belirttiğiniz yazıyı yazar.`, true)
  .addField(`${prefix}oylama`,"Belirttiğiniz şeyden oylama başlatır.", true)
  .addField(`${prefix}caps`,"Caps Lock Korumasını açar.", true)
  .addField(`${prefix}küfür`,"Küfür Korumasını açar.", true)
  .addField(`${prefix}reklam`,"Reklam Korumasını açar.", true)
  .addField(`${prefix}otorol`,"Otorol Komutlarını gösterir.", true)
  .addField(`${prefix}spam`,"Spam Korumasını açar.", true)
  .addField(`${prefix}spam-kapat`,"Spam Korumasını kapatır.", true)
  .addField(`${prefix}sayaç-sistem`,"Sayaç Komutlarını gösterir.", true)
  .addField(`${prefix}bansay`,"Sunucudaki Banlı kişileri sayar.", true)
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
  name: 'yetkili'
};



