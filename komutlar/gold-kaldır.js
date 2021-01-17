const db = require('wio.db')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (client, message, args) => {
   if(message.author.id !== "760421959556792320") if(message.author.id !== "757861452345245706") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:hayir:786989720025694272> **Bu komutu sadece yapımcılarım kullanabilir!**"));
  
  let user = client.users.cache.get(args.slice(0).join(' '));
  let nesne = args[0]
  if (!nesne) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription('<:hayir:786989720025694272> **Eksik Kullanım: xyz!goldkaldır <id>**'));
  
  db.delete(`üyelikk_${nesne}`, 'üyelik')
  
   message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`<a:evet:784361609682092093> **<@${nesne}> adlı kişinin gold üyeliğini başarıyla kapattım.**`))
//client.channels.cache.get('737989667714105346').send(`<a:gold1:719860487734427708> <@${nesne}> ID'li Kullanıcı Gold Üyeliğe Eklendi.   <a:gold1:719860487734427708>`)
if (client.users.cache.get(''+nesne+'').send(new Discord.MessageEmbed().setColor("GOLD").setDescription(`<:hayir:786989720025694272> \`Gold üyeliğiniz kaldırıldı.\` <:hayir:786989720025694272>`))){
 
} else return
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['goldkaldır', 'gold-kaldır'],
  permLevel: 0
};
exports.help = {
  name: 'goldüyekaldır',
  description: 'Gold üye ekler',
  usage: 'gold-üye-ekle'
};