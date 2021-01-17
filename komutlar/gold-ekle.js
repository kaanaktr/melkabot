const db = require('wio.db')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (client, message, args) => {
  if(message.author.id !== "760421959556792320") if(message.author.id !== "789415589407752193") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:hayir:786989720025694272> **Bu komutu sadece yapımcılarım kullanabilir!**"));
  
  let user = client.users.cache.get(args.slice(0).join(' '));
  let nesne = args[0]
  if (!nesne) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription('<:hayir:786989720025694272> **Eksik Kullanım: xyz!goldekle <id>**'));
  
  db.set(`üyelikk_${nesne}`, 'üyelik')
  
  message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`<a:evet:784361609682092093> **<@${nesne}> adlı kişinin gold üyeliğini başarıyla aktif ettim.**`))
//client.channels.cache.get('737989667714105346').send(`<a:gold1:719860487734427708> <@${nesne}> ID'li Kullanıcı Gold Üyeliğe Eklendi.   <a:gold1:719860487734427708>`)
if (client.users.cache.get(''+nesne+'').send(new Discord.MessageEmbed().setColor("GOLD").setDescription(`<a:hawli:784361628442427413> \`Gold üyeliğiniz aktif edildi.\` <a:hawli:784361628442427413>`))) {
 
} else return
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['goldekle'],
  permLevel: 0
};
exports.help = {
  name: 'goldüyeekle',
  description: 'Gold üye ekler',
  usage: 'gold-üye-ekle'
};