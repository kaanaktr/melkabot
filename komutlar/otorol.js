const Discord = require('discord.js');
const loglar = require('../ayarlar.json');
const db = require('wio.db');


var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.MessageEmbed()
  .setColor("GOLD")
      .setAuthor(`TÜRK Bot Otorol Komutları`, client.user.displayAvatarURL({dynamic: true}))
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.addField("<a:hawli:784361628442427413> Otorol Ayarlamak İçin +oto-rol-ayarla @rol #kanal", "Bu Kod Normal Kullanıcılar İçindir")
.addField("<a:hawli:784361628442427413> Otorol Kapat", "Otorol Kapatmak İçin Bunu Yazın `+oto-rol-kapat`")
.addField("<a:hawli:784361628442427413> +oto-rol-msg 》 Otorol Mesajını Ayarlar. ", "Örnek: `+oto-rol-msg -server-, Sunucumuza Hoşgeldin, -uye-! -rol- Adlı Rolün Başarı İle Verildi Seninle Beraber, **-uyesayisi-** Kişiyiz.`")

return message.channel.send(eğlence);
 

};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: 'otorol',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};