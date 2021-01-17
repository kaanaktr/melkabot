const Discord = require('discord.js')
exports.run = (client, message, args) => {

  let yazıİçeriği = args.slice().join(' ')
  const Mesaj = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(yazıİçeriği)

message.channel.send(Mesaj)
  
  message.delete()
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['embed', 'embedyazı'],
  permLevel: 0
}

exports.help = {
  name: 'embed-yaz'
}