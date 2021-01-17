const Discord = require("discord.js"),
client = new Discord.Client();                //tanımlama yapabilirsiniz modül, dosya vs
const config = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
  
  const nn = new Discord.MessageEmbed().setThumbnail();
   if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(nn.setImage('https://media.giphy.com/media/Y41ynggo39awUmeg70/giphy.gif').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`+sil <sayı>\` **kullanmak için,** \`Mesajları Yönet\` **yetkisine sahip olman gerekiyor.**`))
  

  
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`sil` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
//kod kısmınız
   const sil = args[0]
   if (!sil) return message.channel.send(new Discord.MessageEmbed() .setColor("RED") .setDescription(`:x: **Eksik Kullanım: xyz!sil <sayı>**`))
  
  if (!sil > 100) return message.channel.send(new Discord.MessageEmbed() .setColor("RED") .setDescription(`:x: **100'den fazla mesaj silemem.**`))
  
  if (!sil > 0) return message.channel.send(new Discord.MessageEmbed() .setColor("RED") .setDescription(`:x: **0'den az mesaj silemem.**`))
  
  message.channel.send(new Discord.MessageEmbed() .setColor("GREEN") .setDescription(`:white_check_mark: **Başarılı, \`${sil}\` adet mesaj silindi.**`)).then(a => a.delete({timeout: 10000}));
  message.channel.bulkDelete(sil);
  message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sil'
};