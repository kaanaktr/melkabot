const Discord = require('discord.js');
const db = require('wio.db')
exports.run = (client, message, args) => { 
       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()
  
if(!rol) return message.channel.send(`:x: Ayarlamam İçin Bir Rol Etiketlemeilisin. 
:x: Rolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma**
:x: Örnek Kullanım : +otorol @rol #kanal 

 Önemli Not!!: Oto Rol Vermem İçin Verilecek Rolün Üstünde Bir Rolüm Olmalı Yoksa Rolü Veremem :)`)  
 if(!kanal) return message.channel.send(':sparkles: Ayarlamam İçin Bir Kanal Etiketlemelisin.')

message.channel.send(`:white_check_mark: Otorol Aktif Edildi 
:white_check_mark: '${rol}' Olarak Güncelledim! 
:white_check_mark: Kayıt Kanalını '${kanal}' Olarak Güncelledim!`)

db.set(`otok_${message.guild.id}`, kanal.id)  
db.set(`otorol_${message.guild.id}`, rol.id)  

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["otorol-ayarla","oto-rol-ayarla"], 
  permLevel: 0
};

exports.help = {
  name: 'otorolayarla'
};