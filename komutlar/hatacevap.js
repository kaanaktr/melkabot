const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async(client, message, args) => {
  
let melih = args.slice(0).join(' ');
let type = args.slice(1).join(' ');
if (type.length < 1) {
  
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setDescription(`:x: **Eksik Kullanım : ${prefix}hatacevap <cevap>**`)

return message.channel.send(embed)
}
  
const embed = new Discord.MessageEmbed()

.setColor('GREEN')
.setDescription(`:white_check_mark: **<@${melih}> adlı kişiye Geri Bildirim gönderildi!**`)

 client.channels.cache.size("784344427992449045").send(embed); 
  
const embed2 = new Discord.MessageEmbed()

.setColor("GREEN")
.addField(`:envelope: **Gönderen Kişinin Bilgileri ;**`, `:white_small_square: Yetkili ID : ${message.author.id}\n:white_small_square: Yetkili Adı : ${message.author.username}\n:white_small_square: Yetkili Tagı : ${message.author.discriminator}`)
.addField(":pencil: **Cevap**", type)

.setThumbnail(message.author.avatarURL)

message.channel.send(embed2); 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["hata-bildir","hatabildir"],
    permLevel: 0
}

exports.help = {
    name: 'hatacevap'
}