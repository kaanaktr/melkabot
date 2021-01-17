const Discord = require("discord.js"),
client = new Discord.Client();                //tanımlama yapabilirsiniz modül, dosya vs
const config = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
   if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(nn.setImage('https://media.giphy.com/media/Y41ynggo39awUmeg70/giphy.gif').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** **Bu komutu kullanmak için,** \`Mesajları Yönet\` **yetkisine sahip olman gerekiyor.**`))
  

//kod kısmınız
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`yaz` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  
  const melih = args.slice().join(' ')
   if (!melih) return message.channel.send(new Discord.MessageEmbed() .setColor("RED") .setDescription(`:x: **Eksik Kullanım: +yaz <mesaj>**`))
   message.channel.send(`${melih}`)
  message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yaz'
};